import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Utils/BaseUrl';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../UI/PrimaryButton';
import CustomInput from '../UI/CustomInput';
import CustomTextarea from '../UI/CustomTexarea';
import { CircularProgress } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductListingPage = () => {
    const [listing, setLising] = useState([])
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [cat, setCat] = useState([])
    const [pro_data, setProData] = useState([])
    const [catid, setCatid] = useState("");
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false)

    
    const [value, setValue] = useState({
        category: '',
        productname: '' || pro_data.title,
        description: '' || pro_data.description,
        image: '',
        image2: '',
        image3: '',
    })

    useEffect(()=>{
        setValue({
        category: '',
        productname: pro_data.title,
        description: pro_data.description,
        image: '',
        image2: '',
        image3: '',
        })
    }, [pro_data])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
        const data = {
            product_id: id
        }
        axios.post(`${BASE_URL}/product_data`, data)
            .then((res) => {
                // console.log(res)
                setProData(res.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const handleDelete = (id) => {

        const data = {
            product_id: id
        }
        axios.post(`${BASE_URL}/delete_product`, data)
            .then((res) => {
                // console.log(res)
                getlisitngdetail()
                setOpen(false);
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleClose = () => {
        setOpen(false);
    };

    async function getlisitngdetail() {

        const data = {
            user_id: localStorage.getItem("pet_id")
        }

        axios.post(`${BASE_URL}/product_listing`, data)
            .then((res) => {
                setLising(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getlisitngdetail()
    }, [])



    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        // Validate category, servicename, and other fields as needed
        if (!catid) {
            newErrors.category = 'Category is required';
        }

        if (!value.productname) {
            newErrors.productname = 'Productname Name is required';
        }

        if (!value.image) {
            newErrors.image = ' required';
        }
        if (!value.image2) {
            newErrors.image2 = ' required';
        }
        if (!value.image3) {
            newErrors.image3 = ' required';
        }

        if (!value.description) {
            newErrors.description = 'description is required';
        }

        // Add more validations for other fields

        setErrors(newErrors);

        // Return true if there are no errors, otherwise false
        return Object.keys(newErrors).length === 0;
    };



    async function ImageBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        const data = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err);
        });

        return data;
    }





    const handleUpload = async (e) => {
        document.getElementById("uptext1").style.display = "none"
        const data = await ImageBase64(e.target.files[0]);
        const file = e.target.files[0];
        setImage(file);
        setValue((prev) => {
            return {
                ...prev,
                image: data,
            };
        });
    };

    const handleUpload2 = async (e) => {
        document.getElementById("uptext2").style.display = "none"
        const data = await ImageBase64(e.target.files[0]);
        const file = e.target.files[0];
        setImage2(file);
        setValue((prev) => {
            return {
                ...prev,
                image2: data,
            };
        });
    };
    const handleUpload3 = async (e) => {
        document.getElementById("uptext3").style.display = "none"
        const data = await ImageBase64(e.target.files[0]);
        const file = e.target.files[0];
        setImage3(file);
        setValue((prev) => {
            return {
                ...prev,
                image3: data,
            };
        });
    };

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValue) => ({
          ...prevValue,
          [name]: value,
        }));
      };





    const handleSubmit = (e, pro_id) => {
        e.preventDefault()
        const formData = new FormData();
        
        
        if (validateForm()) {
            setLoader(true)

            formData.append('title', value.productname)
            formData.append('image', image)
            formData.append('image2', image2)
            formData.append('image3', image3)
            formData.append('description', value.description)
            formData.append('product_id', pro_id)



            fetch(`${BASE_URL}/update_product`, {
                method: 'POST',
                body: formData,
            })
                .then((res) => {
                    setLoader(false)
                    if (res) {
                        getlisitngdetail()
                        setOpen(false);
                        window.location.pathname = '/productlistingpage'
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    async function getcategory() {
        axios.get(`${BASE_URL}/get_category`)
            .then((res) => {
                setCat(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getcategory()
    }, [])

    const HandleChange = (selectedValue) => {
        if (selectedValue) {
            const selectedId = selectedValue.id;
            // console.log(selectedId, "ser");
            setCatid(selectedId)
            // Now you have the selected id, you can use it in your application logic
        }
    };





    return (
        <div className='service-listing page p-3'>
            {
                listing.map((item, index) => {
                    return (
                        <div className='service-card card p-3 my-2' key={index}>
                            <div className='d-flex justify-content-between ' style={{ borderBottom: "1px solid lightgrey" }}>
                                <h5>{item.title}</h5>
                                <span className='service-list-edit' onClick={() => handleClickOpen(item.id)}>Edit Product</span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p>Service Title: <span>{item.title}</span></p>
                                    <p>Date: <span>{item.created_date}</span></p>
                                </div>
                                <div>
                                    <img src={`https://thetalentclub.co.in/pet-app/upload/product/` + item.upload_image}  width="80px" alt=''/>
                                </div>   
                            </div>
                            <React.Fragment >

                                <Dialog
                                    fullScreen
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Transition}

                                >
                                    <AppBar sx={{ position: 'relative' }}>
                                        <Toolbar sx={{ background: "green" }}>
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                onClick={handleClose}
                                                aria-label="close"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                                Edit Product
                                            </Typography>
                                            <Button autoFocus color="inherit" onClick={handleClose}>
                                                save
                                            </Button>
                                        </Toolbar>
                                    </AppBar>
                                  
                                                <div className='mx-2'>
                                                    <div>
                                                        {loader && <CircularProgress color="success" style={{ position: "absolute", top: "50%", left: "45%", transform: "translateY(-50%)",zIndex :"12" }} />}
                                                    </div>
                                                    <button className='btn btn-danger btn-sm w-100 my-2' onClick={() => handleDelete(pro_data.id)}>Delete Product</button>
                                                    <form onSubmit={(e) => handleSubmit(e, pro_data.id)} method='POST'>

                                                        <div className='my-2'>
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={cat}
                                                                getOptionLabel={(option) => option.title}
                                                                getOptionSelected={(option, value) => option.id === value.id}
                                                                sx={{
                                                                    width: "100%",
                                                                    borderRadius: "8px",
                                                                    border: "1px solid #757575",
                                                                    boxShadow: " 0 2px 6px rgba(0, 0, 0, 0.3)",
                                                                }}
                                                                className='my-2'
                                                                renderInput={(params) => <TextField {...params} label="Category" />}
                                                                name="category"
                                                                onChange={(event, value) => HandleChange(value)} // Pass only the value
                                                            />
                                                            {/* <CustomInput name="servicecategory" placeholder="Service Category" onChange={onHandleChange} /> */}
                                                            {errors.category && <span className="text-danger">{errors.category}</span>}
                                                        </div>

                                                        <div className='my-2'>
                                                            <CustomInput name="productname" placeholder={item.title} value={value.productname} onChange={onHandleChange} />
                                                            {errors.productname && <span className="text-danger">{errors.productname}</span>}
                                                        </div>


                                                        <div className='row text-center my-4 justify-content-evenly'>
                                                            <p>Product Images</p>
                                                            <div className='upload-box col-4' style={{ position: "relative" }}>
                                                                <p id='uptext1' >Upload 1</p>
                                                                <img src={value.image} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                                                <input type='file' placeholder='upload' onChange={handleUpload} name='image' />
                                                                {errors.image && <span className="text-danger">{errors.image}</span>}
                                                            </div>
                                                            <div className='upload-box col-4' style={{ position: "relative" }}>
                                                                <p id='uptext2'>Upload 2</p>
                                                                <img src={value.image2} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                                                <input type='file' placeholder='upload' onChange={handleUpload2} />
                                                                {errors.image2 && <span className="text-danger">{errors.image2}</span>}
                                                            </div>
                                                            <div className='upload-box col-4' style={{ position: "relative" }}>
                                                                <p id='uptext3' >Upload 3</p>
                                                                <img src={ value.image3} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                                                                <input type='file' placeholder='upload' onChange={handleUpload3} />
                                                                {errors.image3 && <span className="text-danger">{errors.image3}</span>}
                                                            </div>
                                                        </div>


                                                        <div>
                                                            <CustomTextarea className="my-2"  value={value.description} name="description" onChange={onHandleChange} />
                                                            {errors.description && <span className="text-danger">{errors.description}</span>}
                                                        </div>
                                                        <div>
                                                            <PrimaryButton children="submit" type="submit" />
                                                        </div>
                                                    </form>

                                                </div>
                                   

                                </Dialog>
                            </React.Fragment>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default ProductListingPage
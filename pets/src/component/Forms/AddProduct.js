
import React, { useEffect, useState } from 'react';
import CustomInput from '../UI/CustomInput';
import CustomTextarea from '../UI/CustomTexarea';
import PrimaryButton from '../UI/PrimaryButton';
import { BASE_URL } from '../Utils/BaseUrl';
import { Link, useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';



const AddProduct = () => {

    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [cat, setCat] = useState([])

    const [value, setValue] = useState({
        category: '',
        productname: '',
        description: '',
        address: '',
        image: '',
        image2: '',
        image3: '',
    })

    const navigate = useNavigate();





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
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
     
        formData.append('title', value.productname)
        formData.append('image', image)
        formData.append('image2', image2)
        formData.append('image3', image3)
        formData.append('description', value.description)
        formData.append('user_id', localStorage.getItem("pet_id"))



        fetch(`${BASE_URL}/add_product`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => {
                // console.log(res)
                if (res) {
                    navigate('/productlistingpage')

                }
            })
            .catch((err) => {
                console.log(err)
            })
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
            console.log(selectedId, "ser");
            // Now you have the selected id, you can use it in your application logic
        }
    };




    return (
        <>

            <div className='mx-2'>
                <form onSubmit={handleSubmit} method='POST'>


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
                    </div>

                    <div className='my-2'>
                        <CustomInput name="productname" placeholder="Product Title" onChange={onHandleChange} />
                    </div>

                 
                    <div className='row text-center my-4'>
                        <p>Product Images</p>
                        <div className='upload-box col-4' style={{ position: "relative" }}>
                            <p id='uptext1' style={{ zIndex: "-1", textAlign: "center" }}>Upload 1</p>
                            <img src={value.image} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                            <input type='file' placeholder='upload' onChange={handleUpload} name='image' />
                        </div>
                        <div className='upload-box col-4' style={{ position: "relative" }}>
                            <p id='uptext2' style={{ zIndex: "-1" }}>Upload 2</p>
                            <img src={value.image2} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                            <input type='file' placeholder='upload' onChange={handleUpload2} />
                        </div>
                        <div className='upload-box col-4' style={{ position: "relative" }}>
                            <p id='uptext3' style={{ zIndex: "-1" }}>Upload 3</p>
                            <img src={value.image3} className='service-img' alt='' width="100%" accept='image/*' id='output' />
                            <input type='file' placeholder='upload' onChange={handleUpload3} />
                        </div>
                    </div>

              
                    <div>
                        <CustomTextarea className="my-2" placeholder="Add Description" name="description" onChange={onHandleChange} />
                    </div>
                    <div>
                        <PrimaryButton children="submit" type="submit" />
                    </div>
                </form>
                <div className='text-center py-3'>
                    <Link to="/productlistingpage" className='text-success'>View All Product</Link>
                </div>
            </div>

        </>
    )
}

export default AddProduct
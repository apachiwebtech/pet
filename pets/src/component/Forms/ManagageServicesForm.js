import React, { useState } from "react";
import CustomInput from "../UI/CustomInput";
import SearchField from "../UI/SearchField";
import "./Forms.css";
import PrimaryButton from "../UI/PrimaryButton";
import axios from "axios";
import { BASE_URL } from "../Utils/BaseUrl";

const ManagageServicesForm = () => {
 
   
    const [search, setSearch] = useState('')
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const [value, setValue] = useState({
      serviceCategory: '',
      serviceName: '',
      serviceDescription: '',
      cost:'',
      discount: '',
      image: '',
      image2: '',
      image3: '',
  })
    const onHandleChange = (e) =>{
        setValue((prev)=>({...prev,[e.target.name] : e.target.value }))
    }

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

console.log(image, image2, image3)

    const handleSubmit=(event)=>{
        event.preventDefault();

        const formData = new FormData();


        formData.append('serviceCategory', value.serviceCategory)
        formData.append('serviceName', value.serviceName);
        formData.append('serviceDescription', value.serviceDescription)
        formData.append('cost', value.cost);
        formData.append('discount', value.discount);
        formData.append('image', image)
        formData.append('image2', image2)
        formData.append('image3', image3)

        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
        axios.post(`${BASE_URL}/postManageService`, formData)
        .then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
        
    }
  return (
    <form id="ProductForm"
    onSubmit={handleSubmit}
      style={{ padding: "10px", marginBottom: "60px", backgroundColor: "" }}
      className="d-flex gap-4 flex-column container"
    >
      <SearchField setSearch={setSearch}/>
      <CustomInput
        style={{ width: "100%", padding: "10px", borderRadius: "8px" }}
        type="text"
        placeholder="Service Name"
        value={value.serviceName}
        name="serviceName"
        onChange={onHandleChange}
      />
      <CustomInput
        value={value.serviceCategory}
        name='serviceCategory'
        style={{ width: "100%", padding: "10px", borderRadius: "8px" }}
        type="text"
        placeholder="Service category"
        onChange={onHandleChange}
      />
      {/* <div
        className="d-flex gap-4  align-items-center justify-content-center"
        style={{ backgroundColor: "", padding: "0" }}
      >
        <div style={{position:"relative"}}>
            <label>upload Photo</label>
          <CustomInput
            onChange={onHandleChange}
            style={{
              border: "1px solid #757575",
              borderRadius: "8px",
              padding: "5px",
              height: "100px",
              width: "100px",
              boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)"
            }}
            type={"file"}
          ></CustomInput>
        </div>
        <div style={{position:"relative"}}>
            <label>upload Photo</label>
          <CustomInput
          onChange={onHandleChange}
            style={{
              border: "1px solid #757575",
              borderRadius: "8px",
              padding: "5px",
              height: "100px",
              width: "100px",
              boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)"
            }}
            type={"file"}
          ></CustomInput>
        </div>
        <div style={{position:"relative"}}>
            <label >upload Photo</label>
          <CustomInput
          onChange={onHandleChange}
            style={{
              border: "1px solid #757575",
              borderRadius: "8px",
              padding: "5px",
              height: "100px",
              width: "100px",
              boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)"
            }}
            type={"file"}x
          ></CustomInput>
        </div>
      </div> */}
      <div className='row text-center my-4'>
                    <div className='upload-box col-4' style={{ position: "relative" }}>
                        <p id='uptext1' style={{ zIndex: "-1", textAlign: "center" }}>Upload 1</p>
                        <img src={value.image} className='service-img' alt='' width="100%" accept='image/*' id='output' style={{zIndex:"-1"}}/>
                        <input type='file' placeholder='upload' onChange={handleUpload} name='image' />
                    </div>
                    <div className='upload-box col-4' style={{ position: "relative" }}>
                        <p id='uptext2' style={{ zIndex: "-1" }}>Upload 2</p>
                        <img src={value.image2} className='service-img' alt='' width="100%" accept='image/*' id='output' style={{zIndex:"-1"}}/>
                        <input type='file' placeholder='upload' onChange={handleUpload2} />
                    </div>
                    <div className='upload-box col-4' style={{ position: "relative" }}>
                        <p id='uptext3' style={{ zIndex: "-1" }}>Upload 3</p>
                        <img src={value.image3} className='service-img' alt='' width="100%" accept='image/*' id='output' style={{zIndex:"-1"}}/>
                        <input type='file' placeholder='upload' onChange={handleUpload3} />
                    </div>
                </div>
      <textarea
        rows={7}
        placeholder="product description"
        value={value.serviceDescription}
        name="serviceDescription"
        onChange={onHandleChange}
      ></textarea>

      <div className="d-flex flex-wrap gap-2">
        <CustomInput onChange={onHandleChange} style={{maxWidth:"115px"}} value={value.cost} name='cost' placeholder={"Cost"} />
        <CustomInput onChange={onHandleChange} style={{maxWidth:"115px"}} value={value.discount} name='discount' placeholder={"Discount"} />
      </div>
      <PrimaryButton type='submit'form='ProductForm' style={{textTransform:"uppercase"}}>Update</PrimaryButton>
    </form>
  );
}

export default ManagageServicesForm
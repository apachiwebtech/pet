import React, { useState } from "react";
import CustomInput from "../UI/CustomInput";
import SearchField from "../UI/SearchField";
import "./Forms.css";
import PrimaryButton from "../UI/PrimaryButton";
const ProductManagingForm = () => {
    const [search, setSearch] = useState('')

    const [values, setValues] = useState({
        productCategory : '',
        productName : '',
        productDescription : '',
    })

    const onHandleChange = (e) =>{
        setValues((prev)=>({...prev,[e.target.name] : e.target.value }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(
            values.productCategory,
            values.productName,
            values.productName
        )

        setValues({
            productName:"",
            productDescription:"",
            productCategory:""
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
        placeholder="Product Name"
        value={values.productName}
        name="productName"
        onChange={onHandleChange}
      />
      <CustomInput
        value={values.productCategory}
        name='productCategory'
        style={{ width: "100%", padding: "10px", borderRadius: "8px" }}
        type="text"
        placeholder="Product category"
        onChange={onHandleChange}
      />
      <div
        className="d-flex gap-4  align-items-center justify-content-center"
        style={{ backgroundColor: "", padding: "0" }}
      >
        <div style={{position:"relative"}}>
            <label style={{position:"absolute", top:"50%",left:"50%", transform:"translate(-50%, -50%)",zIndex:"-1"}}>upload Photo</label>
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
            <label style={{position:"absolute", top:"50%",left:"50%", transform:"translate(-50%, -50%)", zIndex:"-1"}}>upload Photo</label>
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
            <label style={{position:"absolute", top:"50%",left:"50%", transform:"translate(-50%, -50%)",zIndex:"-1"}}>upload Photo</label>
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
      </div>
      <textarea
        style={{
          border: "1px solid #757575",
          borderRadius: "8px",
          padding: "10px",
          boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)"
        }}
        rows={7}
        placeholder="product description"
        value={values.productDescription}
        name="productDescription"
        onChange={onHandleChange}
      ></textarea>

      <div className="d-flex flex-wrap gap-2">
        <CustomInput onChange={onHandleChange} style={{maxWidth:"115px"}} placeholder={"UOM"} />
        <CustomInput onChange={onHandleChange} style={{maxWidth:"115px"}} placeholder={"Cost"} />
        <CustomInput onChange={onHandleChange} style={{maxWidth:"115px"}} placeholder={"Discount"} />
        <CustomInput onChange={onHandleChange} style={{maxWidth:"115px"}} placeholder={"in-stock"} />
        <CustomInput onChange={onHandleChange} style={{maxWidth:"115px"}} placeholder={"out-of-stock"} />
      </div>
      <PrimaryButton type='submit'form='ProductForm' style={{textTransform:"uppercase"}}>Update</PrimaryButton>
    </form>
  );
};

export default ProductManagingForm;

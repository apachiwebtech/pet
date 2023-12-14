import React from "react";

const CustomInput = ({ type, placeholder, name, value, onChange, style, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      style={style}
      {...rest}
    />
  );
};


export default CustomInput;

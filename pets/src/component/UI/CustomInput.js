import React from "react";
import  './CustomInput.css';

const CustomInput = ({ type, placeholder, name, value, onChange, className,style, ...rest }) => {
  //     const classes = 'card ' + props.className;

  const classes = 'Input ' + className;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classes}
      name={name}
      value={value}
      onChange={onChange}
      style={style}
      {...rest}
    />
  );
};


export default CustomInput;
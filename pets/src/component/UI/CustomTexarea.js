import React from "react";
import  './CustomInput.css';

const CustomTextarea = ({  placeholder, name, value, onChange, className,style, ...rest }) => {
  //     const classes = 'card ' + props.className;

  const classes = 'textarea ' + className;
  
  return (
    <textarea
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


export default CustomTextarea;
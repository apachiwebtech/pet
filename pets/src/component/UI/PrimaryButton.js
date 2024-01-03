import React from "react";
import './PrimaryButton.css'
const PrimaryButton = ({className, children, style, type, form, onClick }) => {
  const classes = 'PrimaryButton ' + className;
  return (
    <button className={classes} type={type} form={form} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;

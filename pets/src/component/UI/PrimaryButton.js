import React from "react";
import classes from './PrimaryButton.module.css'
const PrimaryButton = ({ children, style, type, form }) => {
  return (
    <button className={classes.PrimaryButton} type={type} form={form} style={style}>
      {children}
    </button>
  );
};

export default PrimaryButton;

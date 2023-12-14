import React from "react";

const PrimaryButton = ({ children, style, type, form }) => {
  return (
    <button type={type} form={form} style={style}>
      {children}
    </button>
  );
};

export default PrimaryButton;

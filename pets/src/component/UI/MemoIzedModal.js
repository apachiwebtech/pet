import React, { Children } from "react";
import { Modal } from "@mui/material";

export const MemoIzedModal =  React.memo(({  children, open, onClose }) => (
    <Modal

    open={open}
    onClose={onClose}
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
        {children}
    </Modal>
  ));

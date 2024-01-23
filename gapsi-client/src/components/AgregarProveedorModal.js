import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AgregarProveedor from "./AgregarProveedor"; // Importa el componente AgregarProveedor

function AgregarProveedorModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Agregar Proveedor
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{ position: "absolute", right: 0 }}
        ></IconButton>
      </DialogTitle>
      <DialogContent>
        <AgregarProveedor />
      </DialogContent>
    </Dialog>
  );
}

export default AgregarProveedorModal;

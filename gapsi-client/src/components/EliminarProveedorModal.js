import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EliminarProveedor from "./EliminarProveedor"; // Importa el componente EliminarProveedor

function EliminarProveedorModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Eliminar Proveedor
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{ position: "absolute", right: 0 }}
        ></IconButton>
      </DialogTitle>
      <DialogContent>
        <EliminarProveedor />
      </DialogContent>
    </Dialog>
  );
}

export default EliminarProveedorModal;

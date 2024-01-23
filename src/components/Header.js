import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import MenuIcon from "@mui/icons-material/MoreVert"; // Importa el icono de tres puntos verticales
import IconButton from "@mui/material/IconButton";
import EliminarProveedorModal from "./EliminarProveedorModal"; // Importa el modal de eliminación

function Header() {
  const [eliminarModalOpen, setEliminarModalOpen] = useState(false); // Nuevo estado para el modal de eliminación
  const [anchorEl, setAnchorEl] = useState(null);

  const handleEliminarModalOpen = () => {
    setEliminarModalOpen(true); // Abre el modal de eliminación
  };

  const handleEliminarModalClose = () => {
    setEliminarModalOpen(false); // Cierra el modal de eliminación
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEliminarProveedorClick = () => {
    handleMenuClose(); // Cierra el popover
    handleEliminarModalOpen(); // Abre el modal de Eliminar Proveedor
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundColor: "#f8f4f4", // Cambia el color de fondo aquí
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: "gray" }}>
          e-Commerce Gapsi
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 2 }}
          style={{ color: "gray" }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Popover
          open={isMenuOpen}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Typography
            style={{ cursor: "pointer" }}
            onClick={handleEliminarProveedorClick}
          >
            Eliminar Proveedor
          </Typography>
        </Popover>
      </Toolbar>
      <EliminarProveedorModal
        open={eliminarModalOpen}
        onClose={handleEliminarModalClose}
      />{" "}
      {/* Renderiza el modal de Eliminar Proveedor */}
    </AppBar>
  );
}

export default Header;

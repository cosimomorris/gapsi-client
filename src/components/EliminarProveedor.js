import React, { useState } from "react";
import useEliminarProveedor from "../hooks/useEliminarProveedor";
import { Button, TextField, Container, Typography } from "@mui/material";

function EliminarProveedor() {
  const [datosEliminar, setDatosEliminar] = useState({
    nombre: "",
    razonSocial: "",
    direccion: "",
  });
  const { eliminarProveedor, error } = useEliminarProveedor();

  const handleChange = (e) => {
    setDatosEliminar({ ...datosEliminar, [e.target.name]: e.target.value });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await eliminarProveedor(datosEliminar);
    setDatosEliminar({ nombre: "", razonSocial: "", direccion: "" });
    // Puedes agregar lógica para manejar la respuesta aquí
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        Eliminar Proveedor
      </Typography>
      <form onSubmit={handleDelete}>
        <TextField
          label="Nombre del Proveedor"
          variant="outlined"
          fullWidth
          name="nombre"
          value={datosEliminar.nombre}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Razón Social"
          variant="outlined"
          fullWidth
          name="razonSocial"
          value={datosEliminar.razonSocial}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Dirección"
          variant="outlined"
          fullWidth
          name="direccion"
          value={datosEliminar.direccion}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={
            !datosEliminar.nombre ||
            !datosEliminar.razonSocial ||
            !datosEliminar.direccion
          }
        >
          Eliminar Proveedor
        </Button>
        {error && <p>Error al eliminar proveedor: {error.message}</p>}
      </form>
    </Container>
  );
}

export default EliminarProveedor;

import React, { useState } from "react";
import useAgregarProveedor from "../hooks/useAgregarProveedor";
import { Button, TextField, Container } from "@mui/material";

function AgregarProveedor() {
  const [proveedor, setProveedor] = useState({
    id: "",
    nombre: "",
    correo: "",
    sitioWeb: "",
    razonSocial: "",
    direccion: "",
    bio: "",
    telefono: "",
  });
  const { agregarProveedor, isLoading, error } = useAgregarProveedor();
  const [exito, setExito] = useState(null);

  const handleChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !proveedor.id ||
      !proveedor.nombre ||
      !proveedor.correo ||
      !proveedor.sitioWeb ||
      !proveedor.razonSocial ||
      !proveedor.direccion ||
      !proveedor.bio ||
      !proveedor.telefono
    ) {
      setExito("Por favor, complete todos los campos.");
      return;
    }

    try {
      const response = await agregarProveedor(proveedor);
      if (response && response.mensaje) {
        setExito(response.mensaje);
        setProveedor({
          id: "",
          nombre: "",
          correo: "",
          sitioWeb: "",
          razonSocial: "",
          direccion: "",
          bio: "",
          telefono: "",
        });
      }
    } catch (err) {
      setExito(null);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        {/* Campos de texto para cada atributo del proveedor */}
        <TextField
          label="ID"
          name="id"
          value={proveedor.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nombre"
          name="nombre"
          value={proveedor.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Correo"
          name="correo"
          value={proveedor.correo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Sitio Web"
          name="sitioWeb"
          value={proveedor.sitioWeb}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Razón Social"
          name="razonSocial"
          value={proveedor.razonSocial}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={proveedor.direccion}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bio"
          name="bio"
          value={proveedor.bio}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Teléfono"
          name="telefono"
          value={proveedor.telefono}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Agregar Proveedor
        </Button>

        {/* Mensajes de error o éxito */}
        {error && <p>Error al agregar proveedor: {error.message}</p>}
        {exito && <p>{exito}</p>}
      </form>
    </Container>
  );
}

export default AgregarProveedor;

import React, { useState } from "react";
import useAgregarProveedor from "../hooks/useAgregarProveedor";
import { Button, TextField, Container, Typography } from "@mui/material";

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
  const [exito, setExito] = useState(null); // Estado para indicar si la operación fue exitosa

  const handleChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación para asegurarse de que todos los campos estén llenos
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
      await agregarProveedor(proveedor);
      setExito("Proveedor agregado exitosamente"); // Si la operación fue exitosa
      setProveedor({
        id: "",
        nombre: "",
        correo: "",
        sitioWeb: "",
        razonSocial: "",
        direccion: "",
        bio: "",
        telefono: "",
      }); // Limpiar los campos después de agregar
    } catch (error) {
      setExito(null); // Si hubo un error, borra el mensaje de éxito anterior
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
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
        {error && <p>Error al agregar proveedor: {error.message}</p>}
        {exito && <p>{exito}</p>}{" "}
        {/* Mostrar mensaje de éxito si está definido */}
      </form>
    </Container>
  );
}

export default AgregarProveedor;

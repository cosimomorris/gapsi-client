import React, { useState } from "react";
import useEliminarProveedor from "../hooks/useEliminarProveedor";
import { Button, TextField, Container, Typography } from "@mui/material";

function EliminarProveedor() {
  const [id, setId] = useState("");
  const { eliminarProveedor, isLoading, error } = useEliminarProveedor();

  const handleDelete = async () => {
    await eliminarProveedor(id);
    setId("");
    // Puedes agregar lógica para manejar la respuesta aquí
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        Eliminar Proveedor
      </Typography>
      <form onSubmit={handleDelete}>
        <TextField
          label="ID del Proveedor"
          variant="outlined"
          fullWidth
          value={id}
          onChange={(e) => setId(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!id}
        >
          Eliminar Proveedor
        </Button>
        {error && <p>Error al eliminar proveedor: {error.message}</p>}
      </form>
    </Container>
  );
}

export default EliminarProveedor;

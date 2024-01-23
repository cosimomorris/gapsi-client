import React, { useState } from "react";
import useGetProveedores from "../hooks/useGetProveedores";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

import AgregarProveedorModal from "./AgregarProveedorModal"; // Importa el modal de agregar

function Tabla() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {
    data: proveedores,
    isLoading,
    error,
  } = useGetProveedores(page + 1, rowsPerPage);
  const [modalOpen, setModalOpen] = useState(false); // Nuevo estado para el modal de agregar

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Función para abrir el modal de "Agregar Proveedor"
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal de "Agregar Proveedor"
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const descargarInfoProveedor = (idProveedor) => {
    // Encuentra los datos del proveedor específico
    const proveedor = proveedores.find((prov) => prov.id === idProveedor);

    if (proveedor) {
      // Convertir los datos del proveedor a formato CSV
      const datosCsv = convertirDatosACsv(proveedor);

      // Crear un Blob con los datos
      const blob = new Blob([datosCsv], { type: "text/csv" });

      // Crear un enlace para descargar el archivo
      const url = window.URL.createObjectURL(blob);
      const enlace = document.createElement("a");
      enlace.href = url;
      enlace.download = `proveedor-${idProveedor}.csv`;

      // Simular un clic para descargar el archivo y luego limpiar
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
      window.URL.revokeObjectURL(url);
    } else {
      console.log("Proveedor no encontrado");
    }
  };

  const convertirDatosACsv = (proveedor) => {
    // Aquí puedes personalizar el formato del CSV según tus necesidades
    const encabezados =
      "ID,Nombre,Correo,Sitio Web,Razón Social,Dirección,Bio,Teléfono\n";
    const datos = `${proveedor.id},${proveedor.nombre},${proveedor.correo},${proveedor.sitioWeb},${proveedor.razonSocial},${proveedor.direccion},${proveedor.bio},${proveedor.telefono}\n`;

    return encabezados + datos;
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return (
    <>
      <TableContainer component={Paper}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenModal}
            style={{ marginBottom: "20px" }}
          >
            Agregar Proveedor
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Sitio Web</TableCell>
              <TableCell>Razón Social</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Bio</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proveedores.map((proveedor) => (
              <TableRow key={proveedor.id}>
                <TableCell>{proveedor.nombre}</TableCell>
                <TableCell>{proveedor.correo}</TableCell>
                <TableCell>{proveedor.sitioWeb}</TableCell>
                <TableCell>{proveedor.razonSocial}</TableCell>
                <TableCell>{proveedor.direccion}</TableCell>
                <TableCell>{proveedor.bio}</TableCell>
                <TableCell>{proveedor.telefono}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => descargarInfoProveedor(proveedor.id)}
                  >
                    Descargar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={-1} // Ajustar según la respuesta de la API
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <AgregarProveedorModal open={modalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Tabla;

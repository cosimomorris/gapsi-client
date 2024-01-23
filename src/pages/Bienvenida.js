import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tabla from "../components/Tabla";
import imagenCandidato from "../logo.png";
import "../App.css";
import useVersionAndCandidate from "../hooks/useVersionAndCandidate";

function Bienvenida() {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [{ version, nextCandidateNumber }, isLoading] =
    useVersionAndCandidate();

  const manejarClicContinuar = () => {
    setMostrarTabla(true);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        src={imagenCandidato}
        alt="Imagen del Candidato"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2>Bienvenido Candidato {nextCandidateNumber}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={manejarClicContinuar}
      >
        CONTINUAR
      </Button>
      <p>{version}</p>
      {mostrarTabla && (
        <div className="tabla-container">
          <Tabla />
        </div>
      )}
    </div>
  );
}

export default Bienvenida;

import { useState } from "react";

function useAgregarProveedor() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const agregarProveedor = async (proveedor) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/proveedores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proveedor),
      });

      if (!response.ok) {
        throw new Error("Error al agregar proveedor");
      }

      setIsLoading(false);
      return await response.json();
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return { agregarProveedor, isLoading, error };
}

export default useAgregarProveedor;

import { useState } from "react";

export default function useEliminarProveedor() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const eliminarProveedor = async (idProveedor) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/proveedores/${idProveedor}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar proveedor");
      }

      setIsLoading(false);
      return await response.json();
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return { eliminarProveedor, isLoading, error };
}

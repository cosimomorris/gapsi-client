import { useState } from "react";

export default function useEliminarProveedor() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const eliminarProveedor = async ({ nombre, razonSocial, direccion }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/proveedores`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, razonSocial, direccion }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al eliminar proveedor");
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

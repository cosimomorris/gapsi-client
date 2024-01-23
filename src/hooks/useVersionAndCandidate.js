import { useState, useEffect } from "react";

function useVersionAndCandidate() {
  const [data, setData] = useState({ version: "", nextCandidateNumber: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/info"); // Asegúrate de que la ruta es correcta
        const jsonData = await response.json();

        setData({
          version: `Versión ${jsonData.version}`,
          nextCandidateNumber: jsonData.nextCandidateNumber,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return [data, isLoading];
}

export default useVersionAndCandidate;

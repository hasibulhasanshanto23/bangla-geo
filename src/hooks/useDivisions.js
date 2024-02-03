import { useEffect, useState } from "react";

const useDivisions = () => {
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getDivisions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://bdapis.com/api/v1.1/divisions`);
        const data = await response.json();
        setDivisions(data.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch");
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    getDivisions();
  }, []);

  return {
    loading,
    error,
    divisions,
  };
};

export default useDivisions;
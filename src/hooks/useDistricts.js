import { useEffect, useState } from "react";

const useDistricts = () => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getDistricts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://bdapis.com/api/v1.1/districts`);
        const data = await response.json();
        setDistricts(data.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch");
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    getDistricts();
  }, []);

  return {
    loading,
    error,
    districts,
  };
};

export default useDistricts;
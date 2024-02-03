import { useEffect, useState } from "react";

const useDivisionDetails = (divisionName) => {
  const [divisionDetails, setDivisionDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getDivisionDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://bdapis.com/api/v1.1/division/${divisionName}`);
        const data = await response.json();
        setDivisionDetails(data.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch");
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    getDivisionDetails();
  }, [divisionName]);

  return {
    loading,
    error,
    divisionDetails,
  };
};

export default useDivisionDetails;
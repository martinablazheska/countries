import { createContext, useState, useEffect } from "react";

export const countriesContext = createContext({
  countryData: [],
  error: "",
  loading: "",
  filteredData: [],
  setFilteredData: () => {},
  searchInput: "",
  setSearchInput: () => {},
  selectInput: "",
  setSelectInput: () => {},
  filterData: () => {},
});

function CountriesContextProvider(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("All");
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error("Oops! The countries could not be loaded.");
        }

        const countryData = await response.json();
        setError("");
        setCountryData(countryData);
        setFilteredData(countryData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryData();
  }, []);

  useEffect(() => {
    const filteredData = countryData
      .filter((country) => {
        if (selectInput === "All") return country;
        return country.region === selectInput;
      })
      .filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    setFilteredData(filteredData);
  }, [selectInput, searchInput, countryData]);

  const data = {
    countryData,
    filteredData,
    setFilteredData,
    searchInput,
    setSearchInput,
    selectInput,
    setSelectInput,
    error,
    loading,
  };

  return (
    <countriesContext.Provider value={data}>
      {props.children}
    </countriesContext.Provider>
  );
}

export default CountriesContextProvider;

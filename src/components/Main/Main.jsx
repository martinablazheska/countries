import classes from "./Main.module.scss";
import { useState, useCallback, useEffect, useContext } from "react";
import CountryList from "./CountryList/CountryList";
import SearchBar from "./SearchBar/SearchBar";
import RegionPicker from "./RegionPicker/RegionPicker";
import { filterContext } from "../../store/filter-context";
import { themeContext } from "../../store/theme-context";

function Main() {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState("");

  const {
    filteredData,
    setFilteredData,
    filterData,
    searchInput,
    selectInput,
  } = useContext(filterContext);

  const { theme } = useContext(themeContext);

  const fetchCountryData = useCallback(async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const countryData = await response.json();
      setError("");
      setCountryData(countryData);
      setFilteredData(countryData);
    } catch (error) {
      setError("Something went wrong...");
    }
  }, []);

  useEffect(() => {
    fetchCountryData();
  }, []);

  useEffect(() => {
    filterData(countryData);
  }, [selectInput, searchInput, countryData]);

  return (
    <main className={classes.main} data-theme={theme}>
      <div className={classes.filter}>
        <SearchBar />
        <RegionPicker />
      </div>
      {error === "" ? <CountryList countryData={filteredData} /> : error}
    </main>
  );
}

export default Main;

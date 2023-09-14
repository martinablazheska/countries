import classes from "./Main.module.scss";
import { useState, useCallback, useEffect, useContext } from "react";
import CountryList from "./CountryList/CountryList";
import SearchBar from "./SearchBar/SearchBar";
import RegionPicker from "./RegionPicker/RegionPicker";
import { filterContext } from "../../store/filter-context";

function Main() {
  const [countryData, setCountryData] = useState([]);
  const {
    filteredData,
    setFilteredData,
    filterData,
    searchInput,
    selectInput,
  } = useContext(filterContext);

  const fetchCountryData = useCallback(async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await response.json();
    setCountryData(countryData);
    setFilteredData(countryData);
  }, []);

  useEffect(() => {
    fetchCountryData();
  }, [fetchCountryData]);

  useEffect(() => {
    filterData(countryData);
  }, [selectInput, searchInput, countryData]);

  return (
    <main className={classes.main}>
      <div className={classes.filter}>
        <SearchBar />
        <RegionPicker />
      </div>
      <CountryList countryData={filteredData} />
    </main>
  );
}

export default Main;

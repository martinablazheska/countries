import classes from "./Main.module.scss";
import { useState, useEffect } from "react";
import CountryList from "./CountryList/CountryList";

function Main() {
  const [countryData, setCountryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function fetchCountryData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await response.json();
    setCountryData(countryData);
    setFilteredData(countryData);
  }

  useEffect(() => {
    fetchCountryData();
  }, []);

  function onSearch(event) {
    setSearchInput(event.target.value);
    setFilteredData(
      countryData.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
    console.log(filteredData);
  }

  return (
    <main className={classes.main}>
      <div className={classes.searchbar}>
        <input
          type="text"
          placeholder="Search for a country... "
          onChange={onSearch}
          value={searchInput}
        />
      </div>
      <CountryList countryData={filteredData} />
    </main>
  );
}

export default Main;

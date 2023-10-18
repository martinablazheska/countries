import { useContext } from "react";
import { countriesContext } from "../../store/countries-context";
import { themeContext } from "../../store/theme-context";

import CountryList from "./CountryList/CountryList";
import SearchBar from "./SearchBar/SearchBar";
import RegionPicker from "./RegionPicker/RegionPicker";

import classes from "./Main.module.scss";

function Main() {
  const { theme } = useContext(themeContext);
  const { filteredData, error, loading } = useContext(countriesContext);

  let countryListContent = <CountryList countryData={filteredData} />;

  if (loading) {
    countryListContent = <p>Loading countries...</p>;
  }
  if (error) {
    countryListContent = <p>{error}</p>;
  }
  if (!loading && filteredData.length === 0) {
    countryListContent = <p>No countries found.</p>;
  }

  return (
    <main className={classes.main} data-theme={theme}>
      <div className={classes.filter}>
        <SearchBar />
        <RegionPicker />
      </div>
      {countryListContent}
    </main>
  );
}

export default Main;

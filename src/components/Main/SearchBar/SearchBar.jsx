import classes from "./SearchBar.module.scss";
import { useContext } from "react";
import { countriesContext } from "../../../store/countries-context";
import { themeContext } from "../../../store/theme-context";
import searchIcon from "../../../assets/search-outline.svg";

function SearchBar() {
  const { searchInput, setSearchInput } = useContext(countriesContext);
  const { theme } = useContext(themeContext);

  function onChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className={classes.searchbar} data-theme={theme}>
      <img src={searchIcon} alt="search" />
      <input
        type="text"
        placeholder="Search for a country... "
        onChange={onChange}
        value={searchInput}
        name="search"
      />
    </div>
  );
}

export default SearchBar;

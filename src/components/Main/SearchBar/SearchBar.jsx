import { useContext } from "react";
import { countriesContext } from "../../../store/countries-context";

import searchIcon from "../../../assets/search-outline.svg";
import classes from "./SearchBar.module.scss";

function SearchBar() {
  const { searchInput, setSearchInput } = useContext(countriesContext);

  function searchHandler(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className={classes.searchbar}>
      <img src={searchIcon} alt="search" />
      <input
        type="text"
        placeholder="Search for a country... "
        onChange={searchHandler}
        value={searchInput}
        name="search"
      />
    </div>
  );
}

export default SearchBar;

import classes from "./SearchBar.module.scss";
import { useContext } from "react";
import { filterContext } from "../../../store/filter-context";

function SearchBar(props) {
  const { searchInput, setSearchInput } = useContext(filterContext);
  function onChange(event) {
    setSearchInput(event.target.value);
  }
  return (
    <div className={classes.searchbar}>
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

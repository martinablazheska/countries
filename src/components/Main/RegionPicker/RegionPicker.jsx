import classes from "./RegionPicker.module.scss";
import { useContext } from "react";
import { filterContext } from "../../../store/filter-context";

function RegionPicker(props) {
  const { setSelectInput } = useContext(filterContext);

  function onChange(event) {
    setSelectInput(event.target.value);
  }
  return (
    <div className={classes.dropdown}>
      <select name="Filter by Region" onChange={onChange}>
        <option value="none">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default RegionPicker;

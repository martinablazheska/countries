import { useContext, useState } from "react";
import { countriesContext } from "../../../store/countries-context";

import classes from "./RegionPicker.module.scss";

function RegionPicker() {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const { selectInput, setSelectInput } = useContext(countriesContext);
  const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  function optionHandler(option) {
    setSelectInput(option);
    setSelectIsOpen(false);
  }

  function dropdownHandler() {
    if (!selectIsOpen) {
      setSelectIsOpen(true);
    } else setSelectIsOpen(false);
  }

  return (
    <div className={classes.dropdown} onClick={dropdownHandler}>
      <div>
        {selectInput === "All" ? <span>Filter by Region:</span> : selectInput}
      </div>
      {selectIsOpen && (
        <ul>
          {options.map((region) => (
            <li
              key={region}
              value={region}
              onClick={() => optionHandler(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegionPicker;

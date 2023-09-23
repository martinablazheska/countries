import classes from "./RegionPicker.module.scss";
import { useContext, useState } from "react";
import { filterContext } from "../../../store/filter-context";
import { themeContext } from "../../../store/theme-context";

function RegionPicker(props) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const { setSelectInput } = useContext(filterContext);
  const { theme } = useContext(themeContext);

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  function optionHandler(option) {
    setSelectInput(option);
    setSelectIsOpen(false);
    setSelectedOption(option);
  }

  function dropdownHandler() {
    if (selectIsOpen === false) {
      setSelectIsOpen(true);
      setSelectedOption("");
    } else setSelectIsOpen(false);
  }

  return (
    <div
      className={classes.dropdown}
      onClick={dropdownHandler}
      data-theme={theme}
    >
      <div>
        {selectedOption === "" ? (
          <span>Filter by Region:</span>
        ) : (
          selectedOption
        )}
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

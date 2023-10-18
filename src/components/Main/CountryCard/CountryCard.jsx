import { useContext, memo } from "react";
import { themeContext } from "../../../store/theme-context";

import Element from "../../UI/Element";

import classes from "./CountryCard.module.scss";

function CountryCard(props) {
  const { theme } = useContext(themeContext);
  return (
    <div className={classes["country-card"]} data-theme={theme}>
      <Element>
        <div
          className={classes.flag}
          style={{ backgroundImage: `url(${props.flag})` }}
        ></div>
        <div className={classes.name}>{props.name}</div>
        <ul className={classes["additional-data"]}>
          <li>
            <span className={classes["stat-title"]}>Population: </span>{" "}
            {props.population}
          </li>
          <li>
            <span className={classes["stat-title"]}>Region: </span>
            {props.region}
          </li>
          <li>
            <span className={classes["stat-title"]}>Capital: </span>{" "}
            {props.capital}
          </li>
        </ul>
      </Element>
    </div>
  );
}

export default memo(CountryCard);

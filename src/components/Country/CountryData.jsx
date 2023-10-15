import { Link } from "react-router-dom";

import { useContext } from "react";
import { themeContext } from "../../store/theme-context";
import classes from "./CountryData.module.scss";

function CountryData(props) {
  const { theme } = useContext(themeContext);
  return (
    <div className={classes["country-data"]} data-theme={theme}>
      <h1>{props.currentCountry.commonName}</h1>
      <ul>
        <div>
          <li>
            <span>Native Name:</span> {props.currentCountry.nativeName}
          </li>
          <li>
            <span>Population:</span>{" "}
            {props.currentCountry.population.toLocaleString("en-US", {
              minimumFractionDigits: 0,
            })}
          </li>
          <li>
            <span>Region:</span> {""}
            {props.currentCountry.region}
          </li>
          <li>
            <span>Sub Region:</span> {""}
            {props.currentCountry.subregion}
          </li>
          <li>
            <span>Capital:</span> {""} {props.currentCountry.capital}
          </li>
        </div>
        <div>
          <li>
            <span>Top Level Domain:</span> {""} {props.currentCountry.tld}
          </li>
          <li>
            <span>Currencies:</span> {""}
            {props.currentCountry.currencies}
          </li>
          <li>
            <span>Languages:</span>
            {""} {props.currentCountry.languages}
          </li>
        </div>
      </ul>
      {props.currentCountry.border && (
        <div className={classes.borders}>
          <span>Border Countries:</span>
          {props.currentCountry.border.map((country) => (
            <div key={country.cca2}>
              <Link to={`/${country.cca2.toLowerCase()}`}>
                {country.name.common}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryData;

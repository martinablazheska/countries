import { Link } from "react-router-dom";

import CountryCard from "../CountryCard/CountryCard";

import classes from "./CountryList.module.scss";

function CountryList(props) {
  return (
    <div className={classes.countries}>
      {props.countryData.length > 0 &&
        props.countryData.map((country) => (
          <Link to={country.cca2.toLowerCase()} key={country.cca2}>
            <CountryCard
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
              region={country.region}
              subregion={country.subregion}
              capital={country.capital}
              tld={country.tld}
              currencies={country.currencies}
              languages={country.languages}
            />
          </Link>
        ))}
    </div>
  );
}

export default CountryList;

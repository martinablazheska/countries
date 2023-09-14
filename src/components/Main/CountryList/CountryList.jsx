import classes from "./CountryList.module.scss";
import CountryCard from "../CountryCard/CountryCard";

function CountryList(props) {
  return (
    <div className={classes.countries}>
      {props.countryData.map((country) => (
        <CountryCard
          key={country.name.common}
          flag={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
}

export default CountryList;

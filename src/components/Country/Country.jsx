import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { themeContext } from "../../store/theme-context";
import { countriesContext } from "../../store/countries-context";

import backArrow from "../../assets/arrow-back-outline.svg";
import CountryData from "./CountryData";
import classes from "./Country.module.scss";

function Country(props) {
  const navigate = useNavigate();
  function backButtonHandler() {
    navigate(-1);
  }

  const { theme } = useContext(themeContext);
  const { countryData } = useContext(countriesContext);

  const currentCountry = countryData.find(
    (country) => country.cca2.toLowerCase() === props.countryId
  );

  const currentCountryData = {
    flag: currentCountry.flags.png,
    commonName: currentCountry.name.common,
    nativeName: Object.values(currentCountry.name.nativeName)[0].official,
    population: currentCountry.population.toLocaleString("en-US", {
      minimumFractionDigits: 0,
    }),
    region: currentCountry.region,
    subregion: currentCountry.subregion,
    capital: currentCountry.capital,
    tld: currentCountry.tld,
    currencies: Object.values(currentCountry.currencies)
      .map((currency) => currency.name)
      .join(", "),
    languages: Object.values(currentCountry.languages)
      .map((language) => language)
      .join(", "),
    border:
      currentCountry.borders &&
      currentCountry.borders.map((code) =>
        countryData.find((country) => country.cca3 === code)
      ),
  };

  return (
    <main data-theme={theme} className={classes["country__main"]}>
      <div className={classes.button}>
        <img src={backArrow} alt="back" />
        <button onClick={backButtonHandler}>Back</button>
      </div>
      <div className={classes["country__data"]}>
        <img
          src={currentCountryData.flag}
          alt={`${currentCountryData.commonName} flag`}
        />
        <CountryData currentCountry={currentCountryData} />
      </div>
    </main>
  );
}

export default Country;

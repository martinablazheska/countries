import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { countriesContext } from "../../store/countries-context";
import { themeContext } from "../../store/theme-context";

import classes from "./CountryDetail.module.scss";
import DetailsContainer from "./DetailsContainer";

function CountryDetail(props) {
  const navigate = useNavigate();

  const { countryData } = useContext(countriesContext);
  const { theme } = useContext(themeContext);

  const currentCountry = countryData.find(
    (country) => country.cca2.toLowerCase() === props.countryId
  );

  const currentCountryData = {
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

  function backButtonHandler() {
    navigate(-1);
  }

  return (
    <main data-theme={theme} className={classes.main}>
      <button onClick={backButtonHandler}>Back</button>
      <div className={classes["country-container"]}>
        <div className={classes.flag}>
          <img src={currentCountry.flags.png} alt="flag" />
        </div>
        <DetailsContainer currentCountry={currentCountryData} />
      </div>
    </main>
  );
}
export default CountryDetail;

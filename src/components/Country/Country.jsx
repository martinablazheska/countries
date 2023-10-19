import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { countriesContext } from "../../store/countries-context";
import { themeContext } from "../../store/theme-context";

import { formatData } from "./util";

import CountryData from "./CountryData";

import backArrow from "../../assets/arrow-back-outline.svg";
import classes from "./Country.module.scss";

function Country(props) {
  const { theme } = useContext(themeContext);

  const navigate = useNavigate();
  function backButtonHandler() {
    navigate(-1);
  }

  const { countryData, loading } = useContext(countriesContext);

  const currentCountry = countryData.find(
    (country) => country.cca2.toLowerCase() === props.countryId
  );
  if (!currentCountry) return;

  const currentCountryData = formatData(currentCountry, countryData);

  return (
    <main className={classes["country__main"]} data-theme={theme}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div onClick={backButtonHandler} className={classes.button}>
            <img src={backArrow} alt="back" />
            <button>Back</button>
          </div>
          <div className={classes["country__data"]}>
            <img
              src={currentCountryData.flag}
              alt={`${currentCountryData.commonName} flag`}
            />
            <CountryData currentCountry={currentCountryData} />
          </div>
        </>
      )}
    </main>
  );
}

export default Country;

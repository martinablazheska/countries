import classes from "./Main.module.scss";
import { useState, useEffect } from "react";
import CountryCard from "./CountryCard/CountryCard";

function Main() {
  const [countryData, setCountryData] = useState([]);

  async function fetchCountryData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await response.json();
    setCountryData(countryData);
  }

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <main className={classes.main}>
      <div className={classes.countries}>
        {countryData.map((country) => (
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
    </main>
  );
}

export default Main;

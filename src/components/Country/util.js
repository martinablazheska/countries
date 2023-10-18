export function formatData(currentCountry, countryData) {
  return {
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
}

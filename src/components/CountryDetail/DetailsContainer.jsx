import { Link } from "react-router-dom";

function DetailsContainer(props) {
  return (
    <div>
      <h1>{props.currentCountry.commonName}</h1>
      <div>
        <ul>
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
        </ul>
        <ul>
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
        </ul>
      </div>
      {props.currentCountry.border && (
        <ul>
          <span>Border Countries:</span>{" "}
          <ul>
            {props.currentCountry.border.map((country) => (
              <li key={country.cca2}>
                <Link to={`/${country.cca2.toLowerCase()}`} key={country.cca2}>
                  {country.name.common}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      )}
    </div>
  );
}
export default DetailsContainer;

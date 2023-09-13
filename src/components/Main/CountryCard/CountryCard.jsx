import classes from "./CountryCard.module.scss";

function CountryCard(props) {
  return (
    <div className={classes["country-card"]}>
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
    </div>
  );
}

export default CountryCard;

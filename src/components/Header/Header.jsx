import { Link } from "react-router-dom";

import { useContext } from "react";
import { themeContext } from "../../store/theme-context";
import { countriesContext } from "../../store/countries-context";

import moonOutline from "../../assets/moon-outline.svg";
import moonFill from "../../assets/moon.svg";
import classes from "./Header.module.scss";

function Header() {
  const { theme, setTheme } = useContext(themeContext);
  const { setSearchInput, setSelectInput } = useContext(countriesContext);

  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function titleClickHandler() {
    setSearchInput("");
    setSelectInput("All");
  }

  return (
    <header className={classes.header} data-theme={theme}>
      <div className={classes.title}>
        <Link to="/" onClick={titleClickHandler}>
          Where in the world?
        </Link>
      </div>
      <div className={classes["theme-picker"]} onClick={themeHandler}>
        <img src={theme === "light" ? moonOutline : moonFill} alt="moon" />
        <div className={classes.moon}>Dark Mode</div>
      </div>
    </header>
  );
}

export default Header;

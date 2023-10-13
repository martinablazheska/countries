import classes from "./Header.module.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../store/theme-context";
function Header() {
  const { theme, setTheme } = useContext(themeContext);

  function themeHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className={classes.header} data-theme={theme}>
      <div className={classes.title}>
        <Link to="/">Where in the world?</Link>
      </div>
      <div className={classes["theme-picker"]} onClick={themeHandler}>
        {" "}
        <div className={classes.moon}> </div>Dark Mode
      </div>
    </header>
  );
}

export default Header;

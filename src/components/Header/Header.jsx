import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.title}>Where in the world?</div>
      <div className={classes["theme-picker"]}>
        {" "}
        <div className={classes.moon}> </div>Dark Mode
      </div>
    </header>
  );
}

export default Header;

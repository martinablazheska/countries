import classes from "./AppWrapper.module.scss";

function AppWrapper(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}

export default AppWrapper;

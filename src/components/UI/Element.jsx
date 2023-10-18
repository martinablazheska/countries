import classes from "./Element.module.scss";

function Element(props) {
  return <div className={classes.element}>{props.children}</div>;
}

export default Element;

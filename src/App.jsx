import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FilterContextProvider from "./store/filter-context";

function App() {
  return (
    <FilterContextProvider>
      <div className={classes.app}>
        <Header />
        <Main />
      </div>
    </FilterContextProvider>
  );
}

export default App;

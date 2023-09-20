import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import FilterContextProvider from "./store/filter-context";
import ThemeContextProvider from "./store/theme-context";

function App() {
  return (
    <FilterContextProvider>
      <ThemeContextProvider>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </ThemeContextProvider>
    </FilterContextProvider>
  );
}

export default App;

import { createContext, useState } from "react";

export const filterContext = createContext({
  filteredData: [],
  setFilteredData: () => {},
  searchInput: "",
  setSearchInput: () => {},
  selectInput: "",
  setSelectInput: () => {},
  filterData: () => {},
});

function FilterContextProvider(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");

  function filterData(fetchedData) {
    if (searchInput === "" && selectInput === "") {
      setFilteredData(fetchedData);
    }
    if (searchInput === "" && selectInput !== "") {
      setFilteredData(
        fetchedData.filter((country) => {
          return country.region === selectInput;
        })
      );
    }
    if (searchInput !== "" && selectInput === "") {
      setFilteredData(
        fetchedData.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        })
      );
    }
    if (searchInput !== "" && selectInput !== "") {
      setFilteredData(
        fetchedData.filter((country) => {
          return (
            country.name.common
              .toLowerCase()
              .includes(searchInput.toLowerCase()) &&
            country.region === selectInput
          );
        })
      );
    }
  }

  const data = {
    filteredData,
    setFilteredData,
    searchInput,
    setSearchInput,
    selectInput,
    setSelectInput,
    filterData,
  };
  return (
    <filterContext.Provider value={data}>
      {props.children}
    </filterContext.Provider>
  );
}

export default FilterContextProvider;

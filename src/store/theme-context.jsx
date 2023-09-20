import { createContext, useState } from "react";

export const themeContext = createContext({
  theme: "",
  setTheme: () => {},
});

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  const themeData = {
    theme,
    setTheme,
  };

  return (
    <themeContext.Provider value={themeData}>
      {props.children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;

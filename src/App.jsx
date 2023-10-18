import { createHashRouter, RouterProvider } from "react-router-dom";

import CountriesContextProvider from "./store/countries-context";
import ThemeContextProvider, { themeContext } from "./store/theme-context";

import AppWrapper from "./components/UI/AppWrapper";
import RootLayoutPage from "./pages/RootLayoutPage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import { useContext } from "react";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [
      { path: "", index: true, element: <CountriesPage /> },
      { path: "/:countryId", element: <CountryDetailPage /> },
    ],
  },
]);

function App() {
  const { theme } = useContext(themeContext);
  return (
    <CountriesContextProvider>
      <ThemeContextProvider>
        <AppWrapper data-theme={theme} theme={theme}>
          <RouterProvider router={router} />
        </AppWrapper>
      </ThemeContextProvider>
    </CountriesContextProvider>
  );
}

export default App;

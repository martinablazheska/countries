import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Wrapper from "./components/Wrapper/Wrapper";
import CountriesContextProvider from "./store/countries-context";
import ThemeContextProvider from "./store/theme-context";
import RootLayoutPage from "./pages/RootLayoutPage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";

const router = createBrowserRouter([
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
  return (
    <CountriesContextProvider>
      <ThemeContextProvider>
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
      </ThemeContextProvider>
    </CountriesContextProvider>
  );
}

export default App;

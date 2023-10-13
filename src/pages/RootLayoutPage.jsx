import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";

function RootLayoutPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayoutPage;

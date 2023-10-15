import { useParams } from "react-router-dom";

import Country from "../components/Country/Country";

function CountryDetailPage() {
  const { countryId } = useParams();
  return <Country countryId={countryId} />;
}

export default CountryDetailPage;

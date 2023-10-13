import { useParams } from "react-router-dom";

import CountryDetail from "../components/CountryDetail/CountryDetail";

function CountryDetailPage() {
  const { countryId } = useParams();
  return <CountryDetail countryId={countryId} />;
}

export default CountryDetailPage;

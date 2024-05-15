import { Outlet } from "react-router-dom";
import { useEstablishmentsService } from "../services/EstablishmentsService";
import SelectCity from "./SelectCity";
import { useLocation } from "react-router-dom";

function Specials() {
  const { selectedCity, setSelectedCity, getEstablishmentsByCity } =
    useEstablishmentsService();
  const location = useLocation().pathname;
  const returnSelectCityText = (location: string) => {
    switch (location) {
      case "/specials/by-day":
        return "Specials By Day";
      case "/specials/on-now":
        return "Specials On Now";
      default:
        return "";
    }
  };
  const pageTitle = returnSelectCityText(location);
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);
    getEstablishmentsByCity(city);
  };

  console.log(location);

  return !selectedCity ? (
    <>
      <SelectCity cityChange={handleCityChange} pageTitle="" text={pageTitle} />
    </>
  ) : (
    <Outlet />
  );
}

export default Specials;

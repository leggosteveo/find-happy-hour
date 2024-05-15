import React from "react";
import { useEstablishmentsService } from "../services/EstablishmentsService";
import { useNavigate } from "react-router-dom";
import SelectCity from "../components/SelectCity";

//COMPONENT FOR HOME PAGE
const Home = () => {
  const { setSelectedCity, getEstablishmentsByCity } =
    useEstablishmentsService();

  const navigate = useNavigate();

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);
    getEstablishmentsByCity(city);
    navigate(`/specials/on-now`);
  };

  return (
    <SelectCity
      cityChange={handleCityChange}
      pageTitle=""
      text="Find Specials Near You"
    />
  );
};

export default Home;

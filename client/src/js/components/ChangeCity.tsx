import { useEstablishmentsService } from "../services/EstablishmentsService";

//COMPONENT TO CHANGE CURRENT CITY
const ChangeCity = () => {
  const { clearCity } = useEstablishmentsService();
  return (
    <span className="section-label" onClick={clearCity}>
      Change City
    </span>
  );
};

export default ChangeCity;

import { useEstablishmentsService } from "../services/EstablishmentsService";

// COMPONENT DISPLAYING THE CURRENT SELECTED CITY
function SelectedCity() {
  const { clearCity, selectedCity } = useEstablishmentsService();
  return (
    <>
     
        <h2 className="section-title">{selectedCity}</h2>
        <span className="section-button__text-only_ghost" onClick={clearCity}>
          Change City
        </span>
      
    </>
  );
}

export default SelectedCity;

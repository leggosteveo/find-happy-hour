import { Box } from "@mui/material";
import { useEstablishmentsService } from "../services/EstablishmentsService";
import useSlideshow from "../styles/CitySlideshowBackground";

interface Props {
  pageTitle: string;
  text: string;
  cityChange: React.ChangeEventHandler<HTMLSelectElement>;
}

//COMPONENT TO SELECT CITY
function SelectCity({ cityChange, pageTitle, text }: Props) {
  const { selectedCity } = useEstablishmentsService();
  const { backgroundImageStyle } = useSlideshow();

  return (
    <>
      <Box sx={backgroundImageStyle}>
        <span className="section-title page-title__small">{pageTitle}</span>
        <h1 className="section-title text-shadow">{text}</h1>
        <select value={selectedCity} onChange={cityChange}>
          <option value="">Select a City</option>
          <option value="Miami">Miami</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="New York">New York</option>
          <option value="Tampa">Tampa</option>
          <option value="Houston">Houston</option>
          <option value="Atlanta">Atlanta</option>
          <option value="Orlando">Orlando</option>
          <option value="Las Vegas">Las Vegas</option>
        </select>
      </Box>
    </>
  );
}

export default SelectCity;

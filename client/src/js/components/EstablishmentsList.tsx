import { Box } from "@mui/material";
import EstablishmentPreview from "./EstablishmentPreview";

interface Props {
  day: string;
  establishments: Establishment[];
}


//COMPONENT FOR A LIST OF ESTABLISHMENTS
function EstablishmentsList({ day, establishments }: Props) {
  return (
    <Box>
      {establishments.map((establishment, estIndex) =>
        establishments ? (
          <EstablishmentPreview
            key={estIndex}
            day={day}
            establishment={establishment}
          />
        ) : (
          <h1>No specials on {day}.</h1>
        )
      )}
    </Box>
  );
}

export default EstablishmentsList;

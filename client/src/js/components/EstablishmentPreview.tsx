import { Box } from "@mui/material";
import SpecialInfo from "./SpecialInfo";

interface Props {
  day: any;
  establishment: Establishment;
}

// COMPONENT SHOWING PREVIEW INFO FOR AN INDIVIDUAL ESTABLISHMENT
function EstablishmentPreview({ day, establishment }: Props) {
  // Function to get today's day of the week
  function getTodaysDayOfWeek(): string {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const todayIndex = new Date().getDay();
    return daysOfWeek[todayIndex];
  }
  //Today's day of week.
  const today = getTodaysDayOfWeek();

  // Get the current time
  function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  //Today's current time.
  const currentTime = getCurrentTime();

  const establishmentHasSpecialsNow = (
    establishment: Establishment
  ): boolean => {
    if (day != today) return false;
    const specialsToday = establishment.establishmentSpecials[today];
    if (!specialsToday) return false;

    return specialsToday.some((special) => {
      const startTime = special.specialHours.startTime;
      let endTime = special.specialHours.endTime;
      // Handle specials that end on the following day.
      if (endTime < startTime) {
        endTime += 24;
      }
      return currentTime >= startTime && currentTime <= endTime;
    });
  };

  return (
    <Box
      className={`establishment ${
        establishmentHasSpecialsNow(establishment) ? "specials-on-now" : ""
      }`}
    >
      <h2 className="establishment-name">{establishment.establishmentName}</h2>
      <span className="establishment-address">
        Address: {establishment.establishmentAddress}
      </span>
      <h3 className="specials-label">Specials </h3>{" "}
      {establishment.establishmentSpecials[day] ? (
        establishment.establishmentSpecials[day].map((special) => (
          <SpecialInfo
            special={special}
            establishmentHasSpecialsNow={establishmentHasSpecialsNow(
              establishment
            )}
          />
        ))
      ) : (
        <></>
      )}
    </Box>
  );
}

export default EstablishmentPreview;

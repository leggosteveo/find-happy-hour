import EstablishmentsList from "../components/EstablishmentsList";
import { useEstablishmentsService } from "../services/EstablishmentsService";
import SelectedCity from "../components/SelectedCity";
import { Typography } from "@mui/material";

// COMPONENT TO FIND ESTABLISHMENTS WITH SPECIALS ON AT THE CURRENT TIME
function SpecialsOnNow() {
  // Clear city function and establishments array
  const { establishments } = useEstablishmentsService();
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

  // Function to get the current time
  function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  const currentTime = getCurrentTime();

  // Filter establishments that have specials at the current time
  function getEstablishmentsWithSpecialsNow(
    establishments: Establishment[]
  ): Establishment[] {
    return establishments.filter((establishment) => {
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
    });
  }

  // Establishments with specials at the current time.
  const establishmentsWithSpecialsNow =
    getEstablishmentsWithSpecialsNow(establishments);
  console.log(establishmentsWithSpecialsNow);
  const establishmentElements = (
    <EstablishmentsList
      day={today}
      establishments={establishmentsWithSpecialsNow}
    />
  );
  return (
    <>
      <Typography component="h1" className="page-title__small">Specials On Now</Typography>
      <SelectedCity />
      {establishmentsWithSpecialsNow.length > 0 ? (
        <div>{establishmentElements}</div>
      ) : (
        <>
          <br />
          <Typography component="span" className="section-title no-specials">
            No Specials On Right Now
          </Typography>
        </>
      )}
    </>
  );
}

export default SpecialsOnNow;

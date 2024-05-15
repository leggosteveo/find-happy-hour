import { Box } from "@mui/material";
interface Props {
  special: Special;
  establishmentHasSpecialsNow: Boolean;
}

function formatTime12Hour(timeString: string): string {
  const [hours, minutes] = timeString.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHour = hours % 12 || 12;
  return `${twelveHour}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

// Function to get the current time
function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

const currentTime = getCurrentTime();

// COMPONENT DETAILING INFORMATION ON AN INDIVIDUAL SPECIAL OF AN ESTABLISHMENT
function SpecialInfo({ special, establishmentHasSpecialsNow }: Props) {
  function specialIsOnNow(special: Special): boolean {
    if (!establishmentHasSpecialsNow) return false;
    const startTime = special.specialHours.startTime;
    let endTime = special.specialHours.endTime;
    // Handle specials that end on the following day.
    if (endTime < startTime) {
      endTime += 24;
    }
    return currentTime >= startTime && currentTime <= endTime;
  }
  return (
    <Box
      className={`special-info ${
        specialIsOnNow(special) ? "special-on-now" : ""
      }`}
    >
      <span key={special.specialName}>
        <strong>{special.specialName}:</strong>{" "}
        {formatTime12Hour(special.specialHours.startTime)} -{" "}
        {formatTime12Hour(special.specialHours.endTime)}
      </span>
      <p>{special.specialDescription}</p>
      {special.specialCategories.map((category) => (
        <span className="special-category">{category}</span>
      ))}
      <br />
    </Box>
  );
}

export default SpecialInfo;

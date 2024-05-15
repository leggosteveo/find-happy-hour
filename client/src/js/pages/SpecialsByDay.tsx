import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import EstablishmentsList from "../components/EstablishmentsList";
import { useEstablishmentsService } from "../services/EstablishmentsService";
import SelectedCity from "../components/SelectedCity";

//COMPONENT FOR ESTABLISHMENTS BY DAY PAGE
function SpecialsByDay() {
  // import Establishments Service
  const { establishments, getEstablishmentsByCity, selectedCity } =
    useEstablishmentsService();

  // Provide an array of days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get today's day of the week
  const getTodaysDayOfWeek = (): string => {
    const todayIndex = new Date().getDay();
    return daysOfWeek[todayIndex];
  };

  // Set initial state
  const [value, setValue] = useState(new Date().getDay());
  const [day, setDay] = useState(getTodaysDayOfWeek());
  const [loading, setLoading] = useState(true);

  // Function to filter establishments with specials on particular day
  const filterEstablishmentsWithSpecialsOnDay = (
    establishments: Establishment[],
    day: string
  ): Establishment[] => {
    return establishments.filter((establishment: Establishment) => {
      const specialsToday = establishment.establishmentSpecials[day];
      return !!specialsToday;
    });
  };

  // Function to update values on tab select
  const handleChange = async (
    _event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setValue(newValue);
    setDay(daysOfWeek[newValue]);
    setLoading(true);
    await getEstablishmentsByCity(selectedCity);
    setLoading(false);
  };

  // Establishments filtered by Specials on given day.
  const establishmentsWithSpecialsByDay = filterEstablishmentsWithSpecialsOnDay(
    establishments,
    day
  );
  var establishmentsDisplay;
  if (loading) {
    establishmentsDisplay = <h1>Loading...</h1>;
  }
  establishmentsDisplay = (
    <EstablishmentsList
      day={day}
      establishments={establishmentsWithSpecialsByDay}
    />
  );

  return (
    <>
      <Box>
        <Typography component="h1" className="page-title__small">
          Specials By Day
        </Typography>
        <SelectedCity />
      </Box>

      <AppBar className="day-navbar" position="static">
        <Tabs value={value} onChange={handleChange}>
          {daysOfWeek.map((day, index) => (
            <Tab key={index} label={day} />
          ))}
        </Tabs>
      </AppBar>

      {establishmentsWithSpecialsByDay.length > 0 ? (
        <>{establishmentsDisplay}</>
      ) : (
        <Typography component="span" className="section-title no-specials">
          No Specials On {day}
        </Typography>
      )}
    </>
  );
}

export default SpecialsByDay;

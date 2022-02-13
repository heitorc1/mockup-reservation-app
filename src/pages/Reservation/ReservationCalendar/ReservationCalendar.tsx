import React from "react";
import { Box } from "grommet/components/Box";
import { Calendar } from "grommet/components/Calendar";

type Props = {
  day: Date;
  setDay: React.Dispatch<React.SetStateAction<Date>>;
};

const addDays = (date: Date, days: number) => {
  date.setDate(date.getDate() + days);
  return date;
};

export const ReservationCalendar: React.FC<Props> = ({ setDay, day }) => {
  const today = new Date();
  const twoWeeks = addDays(new Date(), 14);

  const handleSelect = (date: string | string[]) => {
    if (typeof date === "string") {
      const newDate = new Date(date);
      setDay(newDate);
    }
  };

  return (
    <Box flex direction="column" justify="start">
      <Calendar
        date={day ? day.toISOString() : new Date().toISOString()}
        bounds={[
          today.toISOString().toString(),
          twoWeeks.toISOString().toString(),
        ]}
        onSelect={handleSelect}
        locale="pt-BR"
        daysOfWeek
      />
    </Box>
  );
};

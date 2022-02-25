import { Box } from "grommet/components/Box";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AppLayout } from "../../components";
import { AvailableHours } from "./AvailableHours";
import { ReservationCalendar } from "./ReservationCalendar";

type Props = {
  size: string;
  setReservationDate: Dispatch<SetStateAction<string>>;
};

export const Reservation: React.FC<Props> = ({ size, setReservationDate }) => {
  const [day, setDay] = useState<Date>(new Date());

  return (
    <AppLayout size={size} fill={false}>
      <Box flex direction="column" justify="start" gap="medium">
        <ReservationCalendar setDay={setDay} day={day} />
        <AvailableHours day={day} setReservationDate={setReservationDate} />
      </Box>
    </AppLayout>
  );
};

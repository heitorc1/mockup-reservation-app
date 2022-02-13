import React, { useState } from "react";
import { AppLayout } from "../../components";
import { AvailableHours } from "./AvailableHours";
import { ReservationCalendar } from "./ReservationCalendar";

type Props = {
  size: string;
};

export const Reservation: React.FC<Props> = ({ size }) => {
  const [day, setDay] = useState<Date>(new Date());

  return (
    <AppLayout size={size} fill={false}>
      <ReservationCalendar setDay={setDay} day={day} />
      <AvailableHours day={day} />
    </AppLayout>
  );
};

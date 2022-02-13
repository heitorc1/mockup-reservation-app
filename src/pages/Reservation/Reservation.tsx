import React from "react";
import { AppLayout } from "../../components";

type Props = {
  size: string;
};

export const Reservation: React.FC<Props> = ({ size }) => {
  return (
    <AppLayout size={size}>
      <p>Reservas</p>
    </AppLayout>
  );
};

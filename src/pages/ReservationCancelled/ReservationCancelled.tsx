import React from "react";
import { AppLayout } from "../../components";
import { Text } from "grommet/components/Text";

type TProps = {
  size: string;
};

export const ReservationCancelled: React.FC<TProps> = ({ size }) => {
  return (
    <AppLayout size={size}>
      <Text>Reserva cancelada com sucesso</Text>
    </AppLayout>
  );
};

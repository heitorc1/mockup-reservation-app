import React from "react";
import { AppLayout } from "../../components";
import { Box } from "grommet/components/Box";
import { Text } from "grommet/components/Text";

type Props = {
  size: string;
};

export const ReservationConfirmed: React.FC<Props> = ({ size }) => {
  return (
    <AppLayout size={size}>
      <Box gap="large">
        <Text textAlign="center">Reserva confirmada!</Text>
        <Text textAlign="center">
          Em breve você receberá um email com a confirmação da reserva
        </Text>
      </Box>
    </AppLayout>
  );
};

import React from "react";
import { AppLayout } from "../../components";
import { Text } from "grommet/components/Text";

type Props = {
  size: string;
};

export const Address: React.FC<Props> = ({ size }) => {
  return (
    <AppLayout size={size}>
      <Text>Endereço</Text>
      <Text>Abrir no Google Maps</Text>
    </AppLayout>
  );
};

import React from "react";
import { AppLayout } from "../../components";
import { Text } from "grommet/components/Text";
import { Anchor } from "grommet/components/Anchor";

type Props = {
  size: string;
};

export const Address: React.FC<Props> = ({ size }) => {
  return (
    <AppLayout size={size}>
      <Text textAlign="center" style={{ padding: "1rem" }}>
        Avenida Rev. James Watson, Quadra C, Lote 77 - Setor Granjeiro -
        Jataí/GO
      </Text>
      <Anchor href="https://goo.gl/maps/MFRUMRzmEzduchZ68" target="_blank">
        Abrir no Google Maps
      </Anchor>
    </AppLayout>
  );
};

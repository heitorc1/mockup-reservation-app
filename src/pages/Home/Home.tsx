import { Box } from "grommet/components/Box";
import React from "react";
import { AppButton, AppImage, AppLayout } from "../../components";

type Props = {
  size: string;
};

export const Home: React.FC<Props> = ({ size }) => {
  return (
    <AppLayout size={size}>
      <Box
        flex
        width="medium"
        background="background"
        elevation="small"
        align="center"
        justify="center"
        gap="medium"
      >
        <AppImage />
        <AppButton label="Reservas" link="reservas" />
        <AppButton label="Cardápio" link="cardapio" target="_blank" />
        <AppButton label="Whatsapp" link="contato" target="_blank" />
        <AppButton label="Localização" link="localizacao" />
      </Box>
    </AppLayout>
  );
};

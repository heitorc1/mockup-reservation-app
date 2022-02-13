import React from "react";
import { AppButton, AppImage, AppLayout } from "../../components";

type Props = {
  size: string;
};

export const Home: React.FC<Props> = ({ size }) => {
  return (
    <AppLayout size={size}>
      <AppImage />
      <AppButton label="Faça sua reserva!" link="reservas" />
      <AppButton label="Cardápio" link="cardapio" target="_blank" />
      <AppButton label="Whatsapp" link="contato" target="_blank" />
      <AppButton label="Ver localização" link="localizacao" />
    </AppLayout>
  );
};

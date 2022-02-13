import React, { useEffect } from "react";
import { AppLayout } from "../../components";
import { Text } from "grommet/components/Text";

type Props = {
  size: string;
};

export const Menu: React.FC<Props> = ({ size }) => {
  useEffect(() => {
    const url =
      "https://drive.google.com/file/d/1aN0VbaK37rLrInZG2i7vJBwN0AkmDrPt/view";
    window.location.href = url;
  }, []);

  return (
    <AppLayout size={size}>
      <Text>Cardápio</Text>
      <Text>Carregando...</Text>
    </AppLayout>
  );
};

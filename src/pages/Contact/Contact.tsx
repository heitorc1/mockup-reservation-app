import React, { useEffect } from "react";
import { AppLayout } from "../../components";
import { Text } from "grommet/components/Text";

type Props = {
  size: string;
};

export const Contact: React.FC<Props> = ({ size }) => {
  useEffect(() => {
    const url = "https://api.whatsapp.com/send?phone=5564992582075";
    window.location.href = url;
  }, []);

  return (
    <AppLayout size={size}>
      <Text>Whatsapp</Text>
      <Text>Carregando...</Text>
    </AppLayout>
  );
};

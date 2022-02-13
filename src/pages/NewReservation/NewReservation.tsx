import React from "react";
import { AppButton, AppLayout } from "../../components";
import { TextInput } from "grommet/components/TextInput";
import { Text } from "grommet/components/Text";
import { Box } from "grommet/components/Box";
import { useParams } from "react-router-dom";
import { DEFAULT_HOUR } from "../Reservation/AvailableHours/hours";

type Props = {
  size: string;
};

export const NewReservation: React.FC<Props> = ({ size }) => {
  const params = useParams();
  console.log(params);
  return (
    <AppLayout size={size}>
      <Box flex direction="column" gap="medium" justify="center">
        <Text
          margin={{ bottom: "0" }}
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          {"Reserva para " + params.date}
        </Text>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          {params.hour && " " + DEFAULT_HOUR[parseInt(params.hour)]}
        </Text>
        <Text margin={{ bottom: "0" }} style={{ fontWeight: "bold" }}>
          Nome
        </Text>
        <TextInput placeholder="digite seu nome" />
        <Text
          margin={{ bottom: "0", top: "0.5rem" }}
          style={{ fontWeight: "bold" }}
        >
          Telefone
        </Text>
        <TextInput
          placeholder="digite seu telefone"
          style={{ marginBottom: "1rem" }}
        />
        <AppButton label="fazer reserva" link="#" />
      </Box>
    </AppLayout>
  );
};

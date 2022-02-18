import React, { FormEvent, useState } from "react";
import { AppLayout, AppModal } from "../../components";
import { TextInput } from "grommet/components/TextInput";
import { Text } from "grommet/components/Text";
import { Box } from "grommet/components/Box";
import { Link, useParams } from "react-router-dom";
import { DEFAULT_HOUR } from "../Reservation/AvailableHours/hours";
import { RadioButtonGroup } from "grommet/components/RadioButtonGroup";
import { Form } from "grommet/components/Form";
import { FormField } from "grommet/components/FormField";
import { Button } from "grommet/components/Button";

type Props = {
  size: string;
};

type TInput = {
  square: string;
  name: string;
  phone: string;
  email: string;
};

export const NewReservation: React.FC<Props> = ({ size }) => {
  const params = useParams();
  const [show, setShow] = useState(false);
  const [input, setInput] = useState<TInput>({
    name: "",
    phone: "",
    square: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setShow((prevState) => !prevState);
  };

  const handleModal = () => setShow((prevState) => !prevState);

  const handleSave = () => {
    // salvar no banco
  };

  return (
    <AppLayout size={size}>
      <Box flex direction="column" gap="medium" justify="start">
        <Text
          margin={{ bottom: "0" }}
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          {"Reserva para " + params.date}
        </Text>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          {params.hour && " " + DEFAULT_HOUR[parseInt(params.hour)]}
        </Text>

        <Form onSubmit={handleSubmit}>
          <FormField
            name="square"
            htmlFor="square-input"
            label="Selecione a quadra *"
            required
          >
            <RadioButtonGroup
              name="square"
              options={["Quadra 1", "Quadra 2", "Quadra 3", "Padel"]}
              value={input.square}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
            />
          </FormField>

          <FormField name="name" htmlFor="nome-input" label="Nome *">
            <TextInput
              id="nome-input"
              name="name"
              placeholder="digite seu nome"
              type="text"
              required
              onChange={handleChange}
            />
          </FormField>

          <FormField
            name="phone"
            htmlFor="telefone-input"
            label="Telefone *"
            style={{ marginBottom: "1.5rem" }}
          >
            <TextInput
              id="telefone-input"
              name="phone"
              type="tel"
              required
              placeholder="digite seu telefone"
              onChange={handleChange}
            />
          </FormField>

          <FormField name="email" htmlFor="email-input" label="Email *">
            <TextInput
              id="email-input"
              name="email"
              type="email"
              required
              placeholder="digite seu email"
              onChange={handleChange}
            />
          </FormField>

          <Box direction="row" gap="medium" justify="center">
            <Button
              type="submit"
              primary
              label="Reservar"
              style={{ marginTop: "1rem" }}
            />
          </Box>
        </Form>
      </Box>
      {show && (
        <AppModal show={show} setShow={setShow}>
          <Box gap="medium">
            <Text alignSelf="center">Deseja confirmar reserva?</Text>
            <Box flex direction="row" gap="small" justify="center">
              <Button
                type="submit"
                primary
                label="Cancelar"
                color="statusError"
                onClick={handleModal}
              />
              <Link to="/reservas/confirmada">
                <Button
                  type="submit"
                  primary
                  label="Reservar"
                  color="statusOk"
                  onSubmit={handleSave}
                />
              </Link>
            </Box>
          </Box>
        </AppModal>
      )}
    </AppLayout>
  );
};

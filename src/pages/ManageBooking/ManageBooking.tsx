import { Box } from "grommet/components/Box";
import { Button } from "grommet/components/Button";
import { Text } from "grommet/components/Text";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppCard, AppLayout, AppModal } from "../../components";

type TProps = {
  size: string;
};

export const ManageBooking: React.FC<TProps> = ({ size }) => {
  const [show, setShow] = useState(false);

  const handleModal = () => setShow((prevState) => !prevState);

  const handleSave = () => {
    // Apagar registro do banco de dados
  };

  return (
    <AppLayout size={size} fill={false}>
      <Box flex gap="medium" direction="column" justify="start">
        <AppCard
          date="17/02/2022"
          name="Maria"
          square="Quadra 1"
          handleClick={handleModal}
        />
        <AppCard
          date="18/02/2022"
          name="Maria"
          square="Quadra 1"
          handleClick={handleModal}
        />
        <AppCard
          date="19/02/2022"
          name="Maria"
          square="Quadra 1"
          handleClick={handleModal}
        />
        <AppCard
          date="20/02/2022"
          name="Maria"
          square="Quadra 1"
          handleClick={handleModal}
        />
      </Box>
      {show && (
        <AppModal show={show} setShow={setShow}>
          <Box gap="medium">
            <Text alignSelf="center">
              Tem certeza que deseja cancelar a reserva?
            </Text>
            <Box flex direction="row" gap="small" justify="center">
              <Button
                type="submit"
                primary
                label="Voltar"
                color="light-5"
                onClick={handleModal}
              />
              <Link to="/reservas/cancelada">
                <Button
                  type="submit"
                  primary
                  label="Cancelar"
                  color="statusError"
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

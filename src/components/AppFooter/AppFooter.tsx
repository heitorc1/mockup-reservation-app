import { Box } from "grommet/components/Box";
import { Text } from "grommet/components/Text";
import React from "react";

export const AppFooter: React.FC = () => {
  return (
    <Box
      tag="footer"
      background="primaryLight"
      pad="medium"
      direction="column"
      align="center"
    >
      <Text>Ipanema Quadras</Text>
      <Text>Telefone (64)99258-2075</Text>
    </Box>
  );
};

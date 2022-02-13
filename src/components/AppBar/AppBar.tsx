import { Box } from "grommet/components/Box";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const AppBar: React.FC<Props> = ({ children }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="primaryMain"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
  >
    {children}
  </Box>
);

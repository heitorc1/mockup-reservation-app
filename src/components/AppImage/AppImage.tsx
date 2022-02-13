import React from "react";
import { Box } from "grommet/components/Box";
import { Image } from "grommet/components/Image";
import logo from "../../assets/img/ipanema.png";

export const AppImage: React.FC = () => {
  return (
    <Box height="small" width="small">
      <Image fit="contain" src={logo} />
    </Box>
  );
};

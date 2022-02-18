import { Configure, Home } from "grommet-icons/icons";
import { Anchor } from "grommet/components/Anchor";
import { Nav } from "grommet/components/Nav";
import React from "react";
import { Link } from "react-router-dom";

export const AppSidebar: React.FC = () => {
  return (
    <Nav gap="large">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Anchor color="primaryMain" icon={<Home />} label="Página Inicial" />
      </Link>
      <Link to="/gerenciar-reservas" style={{ textDecoration: "none" }}>
        <Anchor
          color="primaryMain"
          icon={<Configure />}
          label="Gerenciar Reservas"
        />
      </Link>
    </Nav>
  );
};

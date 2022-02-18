import React, { useState } from "react";
import { Button } from "grommet/components/Button";
import { Heading } from "grommet/components/Heading";
import { Box } from "grommet/components/Box";
import { Collapsible } from "grommet/components/Collapsible";
import { Layer } from "grommet/components/Layer";
import { FormClose, LinkPrevious, Menu } from "grommet-icons";

import { AppBar, AppFooter, AppSidebar } from "../../components";
import { Link, useLocation } from "react-router-dom";

type Props = {
  size: string;
  children: React.ReactNode;
  fill?: boolean;
};

export const AppLayout: React.FC<Props> = ({ size, children, fill = true }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  return (
    <Box fill={fill} gap="medium">
      <AppBar>
        <Box flex direction="row" justify="around" align="center">
          {location.pathname !== "/" ? (
            <Link to="/">
              <Button icon={<LinkPrevious />} />
            </Link>
          ) : (
            <Menu size="large" color="primary" />
          )}
          <Heading level="3" margin="none">
            IPANEMA QUADRAS
          </Heading>
          <Button
            icon={<Menu />}
            onClick={() => setShowSidebar((prevState: boolean) => !prevState)}
          />
        </Box>
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
          {children}
        </Box>
        {!showSidebar || size !== "small" ? (
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              flex
              width="medium"
              background="background"
              elevation="small"
              align="center"
              justify="center"
            >
              <AppSidebar />
            </Box>
          </Collapsible>
        ) : (
          <Layer>
            <Box
              background="background"
              tag="header"
              justify="end"
              align="center"
              direction="row"
            >
              <Button
                icon={<FormClose size="medium" />}
                onClick={() => setShowSidebar(false)}
              />
            </Box>
            <Box fill background="background" align="center" justify="center">
              <AppSidebar />
            </Box>
          </Layer>
        )}
      </Box>
      <AppFooter />
    </Box>
  );
};

import React, { useState } from "react";
import { Button, Heading, Box, Collapsible, Layer } from "grommet";
import { FormClose, Notification } from "grommet-icons";

import { AppBar, AppFooter } from "../../components";

type Props = {
  size: string;
  children: React.ReactNode;
};

export const AppLayout: React.FC<Props> = ({ size, children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Box fill>
      <AppBar>
        <Heading level="3" margin="none">
          IPANEMA QUADRAS
        </Heading>
        <Button
          icon={<Notification />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center" gap="medium">
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
              sidebar
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
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
              />
            </Box>
            <Box fill background="background" align="center" justify="center">
              sidebar
            </Box>
          </Layer>
        )}
      </Box>
      <AppFooter />
    </Box>
  );
};

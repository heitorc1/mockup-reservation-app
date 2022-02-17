import React, { Dispatch, SetStateAction } from "react";
import { Layer } from "grommet/components/Layer";
import { Box } from "grommet/components/Box";

type TProps = {
  children: JSX.Element;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export const AppModal: React.FC<TProps> = ({ children, show, setShow }) => {
  return (
    <>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          background={{ opacity: "strong", color: "#fff" }}
          position="center"
        >
          <Box flex direction="column" justify="center">
            {children}
          </Box>
        </Layer>
      )}
    </>
  );
};

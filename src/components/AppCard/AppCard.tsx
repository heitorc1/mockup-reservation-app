import React from "react";

import { Text } from "grommet/components/Text";
import { Card } from "grommet/components/Card";
import { CardBody } from "grommet/components/CardBody";
import { CardFooter } from "grommet/components/CardFooter";
import { CardHeader } from "grommet/components/CardHeader";
import { Trash } from "grommet-icons/icons";
import { Button } from "grommet/components/Button";
import { Anchor } from "grommet/components/Anchor";

type TProps = {
  date: string;
  name: string;
  square: string;
  handleClick: () => void;
};

export const AppCard: React.FC<TProps> = ({
  date,
  name,
  square,
  handleClick,
}) => {
  return (
    <Card height="small" width="small" background="light-2">
      <CardHeader
        pad="medium"
        style={{ fontWeight: "bold" }}
        background="secondaryLight"
      >
        <Text textAlign="center">{date}</Text>
      </CardHeader>
      <CardBody pad="medium" flex direction="column" justify="center">
        <Text>{square}</Text>
        <Text>{name}</Text>
      </CardBody>
      <CardFooter pad="medium" background="light-3">
        <Anchor disabled />
        <Button
          icon={<Trash color="plain" />}
          hoverIndicator
          onClick={handleClick}
        />
      </CardFooter>
    </Card>
  );
};

import { Button } from "grommet/components/Button";
import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  link: string;
  target?: string;
};

export const AppButton: React.FC<ButtonProps> = ({
  label,
  link,
  target = "_self",
}) => {
  return (
    <Link to={link} target={target}>
      <Button primary label={label} color="secondaryLight" fill="horizontal" />
    </Link>
  );
};

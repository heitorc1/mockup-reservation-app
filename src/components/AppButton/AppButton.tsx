import React from "react";
import { Button } from "grommet/components/Button";
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
    <Link to={link} target={target} style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "15rem",
        }}
      >
        <Button
          primary
          label={label}
          color="secondaryLight"
          style={{ color: "#000" }}
        />
      </div>
    </Link>
  );
};

import React from "react";
import { Button } from "grommet/components/Button";
import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  link: string;
  target?: string;
  color?: string;
  fontColor?: string;
  disabled?: boolean;
};

export const AppButton: React.FC<ButtonProps> = ({
  label,
  link,
  target = "_self",
  color = "secondaryLight",
  fontColor = "#000",
  disabled = false,
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
          color={color}
          style={{ color: fontColor }}
          disabled={disabled}
        />
      </div>
    </Link>
  );
};

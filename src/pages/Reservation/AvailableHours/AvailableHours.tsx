import React, { useEffect, useState } from "react";
import { Button } from "grommet/components/Button";
import { DEFAULT } from "./data";
import { DEFAULT_HOUR } from "./hours";
import { Link } from "react-router-dom";

type Props = {
  day: Date;
};

type DataType = {
  id: number;
  day: string;
  hour: boolean[];
};

export const AvailableHours: React.FC<Props> = ({ day }) => {
  const [hours, setHours] = useState<boolean[]>([]);

  useEffect(() => {
    const data: DataType[] = DEFAULT;
    const date = day;
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const formatedDate =
      date.getDate() + "/" + month + "/" + date.getFullYear();
    const selectedDay = data.filter((row) => row.day === formatedDate);
    setHours(selectedDay[0].hour);
  }, [day]);

  const getLink = (condition: boolean, day: Date, index: number) => {
    if (!condition) {
      return `${encodeURIComponent(day.toLocaleDateString())}/${index}`;
    } else {
      return "#";
    }
  };

  const buttonColor = (input: boolean) => {
    if (input) {
      return {
        color: "#000",
      };
    } else {
      return {
        color: "#fff",
      };
    }
  };

  return (
    <>
      {hours ? (
        hours.map((row, index) => (
          <Link to={getLink(row, day, index)} key={index}>
            <Button
              primary
              color={row ? "statusError" : "statusOk"}
              margin="small"
              label={
                row
                  ? `${DEFAULT_HOUR[index]} - Ocupado`
                  : `${DEFAULT_HOUR[index]} - Livre`
              }
              style={buttonColor(row)}
            />
          </Link>
        ))
      ) : (
        <p>Não carregou</p>
      )}
    </>
  );
};

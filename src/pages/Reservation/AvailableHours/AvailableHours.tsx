import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Select } from "grommet/components/Select";
import { Box } from "grommet/components/Box";
import { getBookingByDate } from "../../../services/api";
import { DEFAULT_HOUR } from "./hours";
import { AppButton } from "../../../components";

type Props = {
  day: Date;
  setReservationDate: Dispatch<SetStateAction<string>>;
};

const defaultAvailability = [
  { label: "quadra 1", availability: true },
  { label: "quadra 2", availability: true },
  { label: "quadra 3", availability: true },
  { label: "padel", availability: true },
];

type TAvailable = {
  label: string;
  availability: boolean;
};

export const AvailableHours: React.FC<Props> = ({
  day,
  setReservationDate,
}) => {
  const [value, setValue] = useState({ id: 6 });
  const [available, setAvailable] = useState<TAvailable[]>(defaultAvailability);

  const hour = useMemo(() => value.id, [value.id]);

  const dateFormated = useMemo(() => {
    const reservationDate = new Date(
      day.getUTCFullYear(),
      day.getUTCMonth(),
      day.getUTCDate(),
      hour
    );
    const correctDate = new Date(
      reservationDate.getTime() +
        Math.abs(reservationDate.getTimezoneOffset() * 60000 - 10800000)
    );
    console.log(reservationDate);

    const postgresFormat =
      correctDate.getFullYear() +
      "-" +
      (correctDate.getMonth() + 1) +
      "-" +
      correctDate.getDate() +
      " " +
      correctDate.getHours() +
      ":00:00.000";
    setReservationDate(toIsoString(correctDate)); // postgresFormat
    return postgresFormat;
  }, [day, hour, setReservationDate]);

  const getDisponibility = useCallback(async (date: string) => {
    setAvailable((prevState) => {
      const object = prevState.map((_, index) => ({
        label: defaultAvailability[index].label,
        availability: true,
      }));
      return object;
    });
    const { data } = await getBookingByDate(encodeURIComponent(date));
    setAvailable((prevState) => {
      const newObject = prevState.map((entry) => {
        const exists = data.square?.find((local) => local === entry.label);
        if (exists) {
          return { ...entry, availability: false };
        } else {
          return { ...entry, availability: true };
        }
      });
      return newObject;
    });
  }, []);

  useEffect(() => {
    getDisponibility(dateFormated);
  }, [dateFormated, getDisponibility]);

  return (
    <Box pad="small">
      <Select
        options={DEFAULT_HOUR}
        labelKey="hour"
        valueKey="id"
        value={{ id: value.id }}
        onChange={({ option }) => setValue(option)}
      />
      <Box
        flex
        direction="column"
        justify="center"
        align="center"
        style={{ marginTop: "1rem" }}
        gap="medium"
      >
        {available.map((row) => (
          <AppButton
            key={row.label}
            link={`/reservas/${encodeURIComponent(
              day.toISOString()
            )}/${hour}/${encodeURIComponent(row.label)}`}
            label={capitalizeFirstLetter(row.label)}
            color={row.availability ? "statusOk" : "statusError"}
            fontColor={row.availability ? "#fff" : "#000"}
            disabled={row.availability ? false : true}
          />
        ))}
      </Box>
    </Box>
  );
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toIsoString(date: Date) {
  const pad = function (num: number) {
    return (num < 10 ? "0" : "") + num;
  };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    ".000Z"
  );
}

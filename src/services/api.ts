import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL +
    ":" +
    process.env.REACT_APP_API_PORT +
    "/api/v1",
});

type TResponse = {
  data: {
    square: string[];
  };
};

type TBooking = {
  date: string;
  square: string;
  name: string;
  phone: string;
  email: string;
};

export const getBookingByDate = (date: string): Promise<TResponse> => {
  return instance.get("/booking/by-date?date=" + encodeURIComponent(date));
};

export const createBooking = (booking: TBooking) => {
  return instance.put(
    "/booking",
    {
      date: booking.date,
      square: booking.square,
      name: booking.email,
      phone: booking.phone,
      email: booking.email,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

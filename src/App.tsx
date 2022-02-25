import React, { useState } from "react";
import { Grommet, ResponsiveContext } from "grommet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme } from "./assets/theme";
import {
  Address,
  Contact,
  Home,
  ManageBooking,
  Menu,
  Reservation,
  ReservationCancelled,
  ReservationConfirmed,
} from "./pages";
import { NewReservation } from "./pages/NewReservation/NewReservation";

const App: React.FC = () => {
  const [reservationDate, setReservationDate] = useState<string>("");

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home size={size} />} />
              <Route
                path="reservas"
                element={
                  <Reservation
                    size={size}
                    setReservationDate={setReservationDate}
                  />
                }
              />
              <Route
                path="reservas/:day/:hour/:square"
                element={
                  <NewReservation
                    size={size}
                    reservationDate={reservationDate}
                  />
                }
              />
              <Route
                path="reservas/confirmada"
                element={<ReservationConfirmed size={size} />}
              />
              <Route
                path="reservas/cancelada"
                element={<ReservationCancelled size={size} />}
              />
              <Route
                path="/gerenciar-reservas"
                element={<ManageBooking size={size} />}
              />
              <Route path="cardapio" element={<Menu size={size} />} />
              <Route path="contato" element={<Contact size={size} />} />
              <Route path="localizacao" element={<Address size={size} />} />
            </Routes>
          </BrowserRouter>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;

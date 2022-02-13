import React from "react";
import { Grommet, ResponsiveContext } from "grommet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme } from "./assets/theme";
import { Address, Contact, Home, Menu, Reservation } from "./pages";
import { NewReservation } from "./pages/NewReservation/NewReservation";

const App: React.FC = () => {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home size={size} />} />
              <Route path="reservas" element={<Reservation size={size} />} />
              <Route
                path="reservas/:date/:hour"
                element={<NewReservation size={size} />}
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

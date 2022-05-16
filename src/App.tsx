import React, { useState } from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './pages/home';
import AllRooms from './pages/rooms/rooms';
import SingleRoom from './pages/rooms/room';
import { Room } from './pages/rooms/rooms';


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

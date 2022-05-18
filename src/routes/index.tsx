import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import AllRooms from '../pages/rooms/rooms';
import SingleRoom from '../pages/rooms/room';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<AllRooms />} />
      <Route path="/rooms/:slug" element={<SingleRoom />} />
    </Routes>
  );
};
export default AllRoutes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import Workouts from '../Pages/Workouts/Workouts';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

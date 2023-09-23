import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route Component={HomePage} path="/home" />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { ResponsePage } from "./pages/response/Response";
import { Inscrevase } from "./pages/inscrevase/Inscrevase";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route Component={HomePage} path="/home" />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route Component={Inscrevase} path="/inscrevase" />
      <Route Component={ResponsePage} path="/response" />
    </Routes>
  );
};

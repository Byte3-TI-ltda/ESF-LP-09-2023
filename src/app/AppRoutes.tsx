import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { Inscrevase } from "./pages/inscrevase/Inscrevase";
import { WelcomePage } from "./pages/welcome/WelcomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route Component={HomePage} path="/home" />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route Component={Inscrevase} path="/inscrevase" />
      <Route Component={WelcomePage} path="/welcome" />
    </Routes>
  );
};

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Goku } from "../pages/Goku";
import { Vegeta } from "../pages/Vegeta";

interface RouterProps {
  token: string;
}

export const Router = ({ token }: RouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard token={token} />} />
        <Route path="goku" element={<Goku />} />
        <Route path="vegeta" element={<Vegeta />} />
      </Routes>
    </BrowserRouter>
  );
};

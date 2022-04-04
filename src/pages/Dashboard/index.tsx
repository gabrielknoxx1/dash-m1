import { Link } from "react-router-dom";
import { RootProvider } from "../../context/RootContext";
import { Router } from "../../router/Router";
import { Container } from "./styles";

interface DashboardProps {
  token: string;
}

export const Dashboard = ({ token }: DashboardProps) => {
  if (!token || token !== "5f768b56-8662-4071-88c4-f728a9a950de") {
    return <h1>Error Token</h1>;
  }
  return (
    <Container>
      <Link to="goku">Goku</Link>
      <Link to="vegeta">Vegeta</Link>
    </Container>
  );
};

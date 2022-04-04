import { RootProvider } from "../../context/RootContext";
import { Container } from "./styles";

interface DashboardProps {
  token: string;
}

export const Dashboard = ({ token }: DashboardProps) => {
  if (!token || token !== "5f768b56-8662-4071-88c4-f728a9a950de") return;
  return (
    <Container>
      <h1>Dashboard - M1</h1>
    </Container>
  );
};

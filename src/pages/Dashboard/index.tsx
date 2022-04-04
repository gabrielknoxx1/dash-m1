import { RootProvider } from "../../context/RootContext";
import { Container } from "./styles";

interface DashboardProps {
  token: string;
}

export const Dashboard = ({ token }: DashboardProps) => {
  return (
    <RootProvider token={token}>
      <Container>
        <h1>Dashboard - M1</h1>
      </Container>
    </RootProvider>
  );
};

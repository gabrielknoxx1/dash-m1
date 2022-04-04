import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
export const Goku = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <button type="button" onClick={() => navigate(-1)}>
        VOLTAR
      </button>
      <h1>Goku</h1>
    </Container>
  );
};

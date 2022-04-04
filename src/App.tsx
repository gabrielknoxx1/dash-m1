import { GlobalStyle } from "../src/styles/global";
import { Router } from "./router/Router";

interface AppProps {
  token: string;
}

export const App = ({ token }: AppProps) => {
  return (
    <>
      <Router token={token} />
      <GlobalStyle />
    </>
  );
};

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface RootContextData {
  authToken: string;
}

interface RootProps {
  children: ReactNode;
  token: string;
}
const RootContext = createContext<RootContextData>({} as RootContextData);

export const RootProvider = ({ children, token }: RootProps) => {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    if (token && token === "5f768b56-8662-4071-88c4-f728a9a950de") {
      setSessionToken(token);
      console.log("Conectou a aplicação");
    } else {
      alert("Não foi possivel conectar a aplicação");
      return;
    }
  }, [token]);

  return (
    <RootContext.Provider value={{ authToken: sessionToken }}>
      {children}
    </RootContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(RootContext);

  return context;
}

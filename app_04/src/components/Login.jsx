import AuthContext from "../providers/AuthContext";
import { useContext } from "react";

export default function Login() {
  const AuthDados = useContext(AuthContext);

  function alterarLogin() {
    AuthDados.setUsuario({
      usuario: "Priscila Andrade",
      perfil: "user",
    });
  }

  return (
    <>
      <button onClick={alterarLogin}>Login</button>
    </>
  );
}

import AuthContext from "../providers/AuthContext";
import { useContext } from "react";

import Login from "./Login";

export default function Userbar() {

  const AuthDados = useContext(AuthContext);

  //console.log(AuthDados);

    return (
      <>
        <hr />
            <p>Usuário:{AuthDados.usuario}</p>
            <p>Perfil: {AuthDados.perfil}</p>
        <hr />
        <Login />
      </>
    );
  }
  
  
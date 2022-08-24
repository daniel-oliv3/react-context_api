import AuthContext from "../providers/AuthContext";
import { useContext } from "react";

import Login from "./Login";

export default function Userbar() {
    return (
      <>
        <hr />
            <p>Usuário: [usuario]</p>
            <p>Perfil: [perfil]</p>
        <hr />
        <Login />
      </>
    );
  }
  
  
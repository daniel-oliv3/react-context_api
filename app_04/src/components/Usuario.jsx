import UsuarioContext from "../contexts/UsuarioContext";
import { useContext } from "react";

export default function Usuario(){

    const usuario = useContext(UsuarioContext)

    return (
        <>
            <hr />
            <h3>Usuario</h3>
            <p>Usuario: {usuario.usuario}</p>
            <p>Perfil: {usuario.perfil}</p>
        </>
    );
}
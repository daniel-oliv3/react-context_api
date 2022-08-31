import { createContext } from "react";


const UsuarioContext = createContext();

export function UsuarioProvider({children}){

    //Dados do usuario
    const dados_usuario = {
        usuario: 'Daniel Oliveira',
        perfil: 'admin'
    }

    return (
        <UsuarioProvider value={dados_usuario}>
            {children}
        </UsuarioProvider>
    )
}

export default UsuarioContext;






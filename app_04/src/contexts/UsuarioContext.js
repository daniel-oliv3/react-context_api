import { createContext } from "react";


const UsuarioContext = createContext()

export function UsuarioProvider({children}){

    //Dados do usuario
    const dados_usuario = {
        usuario: 'Daniel Oliveira',
        perfil: 'admin'
    }

    return (
        <UsuarioContext.Provider value={dados_usuario}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext;






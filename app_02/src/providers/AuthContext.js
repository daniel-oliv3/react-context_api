import { createContext } from "react";


const AuthContext = createContext();

export function AuthProvider({children}){

    //dados globais do context
    const AuthDados = {
        usuario: 'Daniel',
        perfil: 'admin'
    }


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;









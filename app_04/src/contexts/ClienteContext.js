import { createContext } from "react";


const ClienteContext = createContext();

export function ClienteProvider({children}){

    //Dados do cliente
    const dados_cliente = {
        usuario: 'Priscila Andrade',
        perfil: 'user'
    }

    return (
        <ClienteProvider value={dados_cliente}>
            {children}
        </ClienteProvider>
    )
}

export default ClienteContext;






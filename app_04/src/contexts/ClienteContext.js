import { createContext } from "react";


const ClienteContext = createContext()

export function ClienteProvider({children}){

    //Dados do cliente
    const dados_cliente = {
        nome: 'Priscila Andrade',
        email: 'priscila@gmail.com'
    }

    return (
        <ClienteContext.Provider value={dados_cliente}>
            {children}
        </ClienteContext.Provider>
    )
}

export default ClienteContext;






import Usuario from "./components/Usuario";
import Cliente from "./components/Cliente";


//Providers
import { UsuarioProvider } from "./contexts/UsuarioContext";
import { ClienteProvider } from "./contexts/ClienteContext";

export default function App() {

  return (
    <>
      <h1>React Múltiplos Context APIs</h1>


      <UsuarioProvider>
        <Usuario />
      </UsuarioProvider>

      
      
      <ClienteProvider>
        <Cliente />
      </ClienteProvider>


    </>
  );
}


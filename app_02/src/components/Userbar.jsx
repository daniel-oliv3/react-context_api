import Login from "./Login";

export default function Userbar({usuario, login}) {
    return (
      <>
        <hr />
            <p>Usuário: [usuario]</p>
            <p>Perfil: [perfil]</p>
        <hr />
        <Login login={login}/>
      </>
    );
  }
  
  
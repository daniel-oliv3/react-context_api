import Login from "./Login";

export default function Userbar({usuario, login}) {
    return (
      <>
        <hr />
            Usuário: <strong>{usuario}</strong>
        <hr />
        <Login login={login}/>
      </>
    );
  }
  
  
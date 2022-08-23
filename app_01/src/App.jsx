import Userbar from "./components/Userbar";
import { useState } from "react";

export default function App() {

  const [Usuario, setUsuario] = useState('Daniel Oliveira');

  return (
    <>
      <h3>React Prop-Drilling</h3>

      <Userbar usuario={Usuario} login={setUsuario} />
    </>
  );
}


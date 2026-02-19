import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <div>
        <h1>Github Perfil</h1>
      </div>
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        onBlur={(e) => setNomeUsuario(e.target.value)}
      />
      <button className="btn-app">Clique aqui</button>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  );
}

export default App;

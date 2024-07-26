import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFromularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario ] = useState('');

  return (
    <> 
      <div>
          <h1>Github Perfil</h1>
      </div>
      <input type="text" placeholder="Digite um usuário do Github" onBlur={(e) => setNomeUsuario(e.target.value) } />
      <button className="btn-app">Clique aqui</button>
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}

      <button onClick={() => setFromularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App

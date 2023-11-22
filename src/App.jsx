import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFromularioEstaVisivel] = useState(true);

  return (
    <>  
      <Perfil nome="Aldo" endereco="https://github.com/aldosds.png" />
      <ReposList/>

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}

      <button onClick={() => setFromularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App

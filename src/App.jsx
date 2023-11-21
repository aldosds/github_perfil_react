function App() {
  const nome = "Aldo";

    function retornaNome() {
      return nome;
    }

    const pessoa = {
      seuNome: "Maria"
    }

    let estaDeDia = true;

  return (
    <>    
      <h1>Olá, {retornaNome()}</h1>
      <h2>Subtitulo</h2>
      <p>Pessoa do nome {pessoa.seuNome}</p>
      {/* {estaDeDia === true ? 'Bom dia!' : 'Boa tarde!'} */}
      {/* Outra forma */}
      {/* {estaDeDia ? 'Bom dia!' : 'Boa tarde!'} */}
      {/* Ocutando caso esteja false */}
      {estaDeDia && 'Bom dia!'}
    </>
  )
}

export default App

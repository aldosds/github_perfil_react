import { useState } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState(''); {/* Um estado diferente */}

    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        //setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            //estadoAnterior = valornovo

            return evento.target.value;
        })
    }

    const rederizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        console.log(soma)
        console.log(media)

        if(media >= 7) {
            return (
                <p>Olá {nome}, você foi aporvado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form> {/* Um estado diferente utilizando ({target}) removendo evento após o parseInt */}
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {rederizaResultado()}
        </form>
    )
}

export default Formulario;
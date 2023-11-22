import { useEffect, useState } from "react";

const ReposList = () => {
    
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/aldosds/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);

            }, 3000);
            // console.log(resJson);
        })
    }, []);

    return (
        <>
            <h1>Repositório</h1> 
            {estaCarregando && (
                <h2>Carregando...</h2>                
            )}
            
            {/* <ol>
                {repos.map(repositorio => (
                    <li key={repositorio.id}>
                        <b>Nome:</b> {repositorio.name} <br />
                        <b>Linguagem:</b> {repositorio.language} <br />
                        <a target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ol> */}
            {/* Utilizando o ECMAScript 6 */}
            <ol>
                {repos.map(({id, name, language, html_url}) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem:</b> {language} <br />
                        <a target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ol>
        </>
    )
}

export default ReposList;
import React, { useState, useEffect } from 'react';
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

    const [nutri, setNutri] = useState([])

    //renderizar quando abrir a página
    useEffect(() => {

        function loadApi(){
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
            fetch(url)
                .then((r)=> r.json())
                .then((json) => {
                    console.log(json);
                    setNutri(json)
                })
        }

        loadApi()
    }, [])

    return (
        <div className="App">
            <div className="container">
                <header>
                    <strong>
                        React Nutri
                    </strong>
                </header>

                {nutri.map((item) => {
                    return (
                        <article key={item.id} className="posts">
                            <strong className="titulo">
                                {item.titulo}
                            </strong> <br/>
                            <img src={item.capa} alt={item.titulo} className="capa" />
                            <p>
                                {item.subtitulo}
                            </p>
                            <a className="botao">Acessar</a>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}


//Arquivo corresponde a página principal do App
//Necessario colocar o export para que outros componentes possam utiliza-los
export default App;

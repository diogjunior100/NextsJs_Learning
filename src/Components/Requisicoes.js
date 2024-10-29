import React, {useState, useEffect} from "react";
import '../style.css';

export default function Requisicoes (){

    const [nutri, setNutri] = useState([])

    useEffect(() => {

        function loadApi(){
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
                fetch(url).then((r) => r.json())
                    .then((json) => {
                        console.log(json);
                        setNutri(json);
                    })
        }
        loadApi()
    }, [])

    return (
        <div className="App">
            <div className="container">
                <header>
                    <strong>
                        Nutri App
                    </strong>
                </header>

                {nutri.map((item) => {
                    return (
                        <article key={item.id} className="posts">
                            <strong className="titulo">
                                {item.titulo}
                            </strong>

                            <img src={item.capa} alt={item.titulo} className="capa"/>

                            <p>
                                {item.subtitulo}
                            </p>

                            <button className="botao">
                                Acessar
                            </button>

                        </article>
                    )
                })}
            </div>
        </div>
    )
}

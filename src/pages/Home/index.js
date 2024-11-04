import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Bem vindo ao Home </h1>
            <Link to="/sobre">Sobre</Link> <br/>
            <Link to="/contatos">Contatos</Link> <br/>
        </div>
    )
}
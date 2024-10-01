import { useState } from 'react';

function Formulario () {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState(0);
    const [user, setUser] = useState({});

    function handleRegistra(e){
        e.preventDefault();

        setUser({
            nome: nome,
            idade: idade,
            email: email,
        })
    }

    return (
        <div>
            <form onSubmit={handleRegistra}>
                <h1> Registrar </h1>

                <label>Nome </label><br />
                <input
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />
                <br />

                <label>Idade </label><br />
                <input
                    placeholder="Digite sua idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)} />
                <br />

                <label> Email </label><br />
                <input
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br />

                <button type="submit"> Registrar </button>
            </form>
        
            <div>
                <span> {user.nome} </span> <br />
                <span> {user.idade} </span> <br />
                <span> {user.email} </span>  <br />
            </div>
        </div>
    )
}

export default Formulario;
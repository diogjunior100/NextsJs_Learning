/*
function Nome({aluno, idade}) {
    return (
        <div className="Nome">
            <h1>Nome {aluno}</h1>
            <h2>Idade {idade}</h2>

        </div>
    )
}

OU
*/
// Primeiro Componente da Aplicação

function Nome(props) {
    return (
        <div className="Nome">
            <h1>Nome {props.aluno}</h1>
            <h2>Idade {props.idade}</h2>

        </div>
    )
}

export default Nome;
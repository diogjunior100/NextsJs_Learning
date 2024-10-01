import {useState, useEffect} from 'react';


function Tarefes() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        'Pagar conta de luz',
        'Estudar React'
    ]);

    useEffect( ()=> {
        const tarefasStorage = localStorage.getItem('@tarefa');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])

    //Toda vez que monta a página, ele chama essa função
    useEffect( () => {
        //salva as informações no armazenamento local
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas])

    function handleTarefas(e) {
        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');
    }


    return (
        <div>
            <form onSubmit={handleTarefas}>
                <h1>Registrar Tarefa</h1>

                <label>Tarefa</label> <br/>

                <input
                placeholder='Digite a tarefa'
                value={input}
                onChange={(e) => setInput(e.target.value)} />

                <button type='Submit'> Tarefa nova </button>
            </form>
        

        <ul>
            {tarefas.map( tarefa => (
                <li key={tarefa}>{tarefa}</li>
            ))}
        </ul>

        </div>
    )
}


export default Tarefes;
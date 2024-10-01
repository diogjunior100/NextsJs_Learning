import { useState } from 'react';
import Nome from "./Components/Nome";
import Formulario from './Components/Formulario';
import Tarefas from './Components/Tarefas';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador');

  //Funcao para ao clicar o botao, ele alterar o nome
  function changeName(nome){
    setAluno(nome);
  }

  return (
    <div className="App">
      <h1>
        Bem vindo ao meu projeto
      </h1>

      <h2>Ola {aluno} </h2>
      <button onClick={() => changeName('Diogenes')}>
        Mudar Nome
      </button>

      <Nome aluno="Jose" idade={30}/>

      <Formulario/>

      <Tarefas/>

    </div>
  );
}


//Arquivo corresponde a página principal do App
//Necessario colocar o export para que outros componentes possam utiliza-los
export default App;

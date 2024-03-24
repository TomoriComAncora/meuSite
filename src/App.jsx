import React, { useState, useEffect } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");


  useEffect(()=>{
    const tarefaLocalStorage = localStorage.getItem("local");

    if(tarefaLocalStorage){
      setTarefas(JSON.parse(tarefaLocalStorage));
    }
  }, [])


  useEffect(()=>{
    localStorage.setItem("local", JSON.stringify(tarefas));
  }, [tarefas])


  const handleAdd = () => {
    setTarefas([...tarefas, input]);
    setInput("");
  };

  return (
    <div>
      Hooks
      <ul>
        {tarefas.map((tarefa, e) => (
          <li key={e}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add Tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;

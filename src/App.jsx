import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState(["Pagar Luz", "Limpar casa"]);
  const [input, setInput] = useState("");

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

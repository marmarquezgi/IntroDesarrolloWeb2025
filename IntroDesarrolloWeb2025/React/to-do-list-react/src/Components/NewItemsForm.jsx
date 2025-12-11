import { useEffect, useState } from "react";

export default function NewItemsForm({ addItem }) {
  const [texto, setTexto] = useState("");

  const handleAdd = () => {
    if (texto.trim() === "") return;
    addItem(texto); //Si no estavacio ejecuta la funcion
    setTexto(""); //Si esta vacio no ejecuta nada
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
}

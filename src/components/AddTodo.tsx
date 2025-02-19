import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { add } from '../store';

export function AddTodo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    dispatch(add(newTodo));
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Novo todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  )
}
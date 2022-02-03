import { useState } from 'react';
import Header from "./components/Header";
import AddToList from "./components/AddToList";
import VarietyTask from "./components/VarietyTask";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {

  const[todo, setTodo] = useState([
    {
      id: 1,
      text: "Grocery",
    },
    {
      id: 2,
      text: "Exercise",
    },
    {
      id: 3,
      text: "Study",
    },
  ])

  return (
    <>
      <Header />
      <AddToList />
      <VarietyTask />
      <TodoList todo={todo} />
    </>
  );
}
export default App;

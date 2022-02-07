import { useState } from 'react';
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import VarietyTask from "./components/VarietyTask";
import TodoList from "./components/TodoList";
import Card from "./components/shared/Card";
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
      <AddTaskForm />
      <VarietyTask />
      <TodoList todo={todo} />
    </>
  );
}
export default App;

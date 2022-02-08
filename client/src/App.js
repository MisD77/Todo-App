import { useState } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import VarietyTask from "./components/VarietyTask";
import TodoList from "./components/TodoList";
import Card from "./components/shared/Card";
import "./index.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Grocery ",
      complete: "Completed",
    },
    {
      id: 2,
      text: "Exercise ",
      complete: "Not Completed",
    },
    {
      id: 3,
      text: "Study ",
      complete: "Completed",
    },
  ]);

  const addTodo = (newTodo) => {
    setTodo([newTodo, ...todo]);
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      console.log("App", id);
    }
    //delete the todo item by id
    //update the db by id
  };

  return (
    <>
      <Header />
      <AddTaskForm handleAdd={addTodo} />
      <VarietyTask />
      <TodoList todo={todo} handleDelete={deleteTodo} />
    </>
  );
}
export default App;

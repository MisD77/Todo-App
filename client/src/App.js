import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import VarietyTask from "./components/VarietyTask";
import TodoList from "./components/TodoList";
import Card from "./components/shared/Card";
import "./index.css";

function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    axios
      .get("http://localhost:8080/api/tasks")
      .then((response) => {
        const allTasks = response.data;
        setTodo(allTasks);
      })
      .catch((err) => console.error("Error:{error}"));
  };

  const addTodo = async (newTodo) => {
    axios.post("http://localhost:8080/api/tasks", newTodo).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    setTodo([newTodo, ...todo]);
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      console.log("App", id);
    }
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

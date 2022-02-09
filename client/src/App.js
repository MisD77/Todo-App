import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import VarietyTask from "./components/VarietyTask";
import TodoList from "./components/TodoList";
import Card from "./components/shared/Card";
import "./index.css";

function App() {
  const apiUrl = "http://localhost:8080/api/tasks";
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        const allTasks = response.data;
        setTodo(allTasks);
      })
      .catch((err) => console.error("Error:{error}"));
  };

  const addTodo = async (newTodo) => {
    axios.post(apiUrl, newTodo).then((res) => {
      setTodo([newTodo, ...todo]);
    });
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setTodo(todo.filter((item) => item._id !== id));
      axios.delete(apiUrl + "/" + id).then((res) => {
        const allTasks = res.data;
        setTodo(allTasks);
      });
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

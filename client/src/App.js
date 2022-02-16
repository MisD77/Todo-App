import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import VarietyTask from "./components/VarietyTask";
import TodoList from "./components/TodoList";
import "./index.css";
import { getAllTasks, addTask, completedChange } from "./apiServices";

function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getAllTasks().then((response) => {
      const allTasks = response.data;
      setTodo(allTasks);
    });
  }, []);

  const addTodo = async (newTodo) => {
    addTask(newTodo).then((res) => {
      setTodo([newTodo, ...todo]);
    });
  };

  // const updateTodo = (id) => {
  //   updateTask(todo, id).then((res) => {
  //     const allTasks = res.data;
  //     setTodo(allTasks);
  //   });
  // };

  const onCompletedChange = (todo, id) => {
    if (window.confirm("Mark this task complete?")) {
      //const newTodo = completedChange(todo, id);
      //console.log("toggle", newTodo);
      const item = this.item;
      console.log(todo);
      setTodo((item.completed = !item.completed));
    }
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      console.log("ok");
      setTodo(todo.filter((item) => item._id !== id));
    }
  };

  return (
    <>
      <Header />
      <AddTaskForm handleAdd={addTodo} />
      <VarietyTask />
      <TodoList
        todo={todo}
        handleDelete={deleteTodo}
        completedChange={onCompletedChange}
      />
    </>
  );
}
export default App;

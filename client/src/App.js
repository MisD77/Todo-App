import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import VarietyTask from "./components/VarietyTask";
import TodoList from "./components/TodoList";
import "./index.css";
import { getAllTasks, addTask, completedDone, deleteTodo } from "./apiServices";

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

  const onCompletedChange = (id) => {
    if (window.confirm("Mark this task complete?")) {
      setTodo(completedDone(todo, id));
    }
  };

  const onDeleteTodo = (id) => {
    setTodo(deleteTodo(todo, id));
  };

  return (
    <>
      <Header />
      <AddTaskForm handleAdd={addTodo} />
      <VarietyTask />
      <TodoList
        todo={todo}
        handleDelete={onDeleteTodo}
        completedChange={onCompletedChange}
      />
    </>
  );
}
export default App;

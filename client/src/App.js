import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import VarietyTask from "./components/VarietyTask";
import TodoItem from "./components/TodoItem";
import "./index.css";
import { getAllTasks, addTask, updateTask, deleleteTask } from "./apiServices";

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

  const onUpdate = async (id) => {
    setTodo(updateTask(todo, id));
  };

  const onDelete = (id) => {
    setTodo(deleleteTask(todo, id));
  };

  return (
    <>
      <Header />
      <AddTaskForm handleAdd={addTodo} />
      <VarietyTask />
      {/* <TodoList
        todo={todo}
             /> */}
      <div className="todo-list">
        {todo.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            handleDelete={(id) => onDelete(id)}
            completedDone={(id) => onUpdate(id)}
          />
        ))}
      </div>
    </>
  );
}
export default App;

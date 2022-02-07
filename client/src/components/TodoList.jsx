import TodoItem from "./TodoItem";

function TodoList({ todo }) {
if (!todo || todo.length === 0)
{
    return <p>No Todo Item</p>
}

  return (<div className="todo-list">
    {todo.map((item) => (
      <TodoItem key={item.id} item={item}/>
    ))}
  </div>);
}

export default TodoList;

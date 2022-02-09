import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


function TodoList({ todo, handleDelete, handleCheck }) {
if (!todo || todo.length === 0)
{
    return <p>No Todo Item</p>
}

  return (
  <div className="todo-list">
    {todo.map((item) => (
      <TodoItem key={item._id} item={item} 
      handleDelete={handleDelete} handleCheck={handleCheck} />
    )
  )}
  </div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.array.isRequired,
}

export default TodoList;

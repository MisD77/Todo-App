import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


function TodoList({ todo, handleDelete, completedChange}) {
  if (!todo || todo.length === 0)
  {
    return <p>No Todo Item</p>
  }

  return (
  <div className="todo-list">
    {todo.map((item) => (
      <TodoItem key={item._id} item={item}
      handleDelete={handleDelete}
      completedChange={completedChange}
      />
    )
  )}
  </div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.array.isRequired,
}

export default TodoList;

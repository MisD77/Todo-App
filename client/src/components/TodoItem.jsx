import { FaTrashAlt } from 'react-icons/fa';
function TodoItem({ item, completedChange, deleteTodo }) {

  const completedDone = () => {
    item.completedChange(item._id);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    item.deleteTodo(item._id);
  }
  const className = item.completed ? "done-todo" : "";

  return (
    <div className={`card item ${className} todo-${item._id}`}> 
      <p className="toggle-todo" onClick={() => completedDone()}>
        {item.name}
      </p>
      <button data-testid="" onClick={(e) => handleDelete(e)} className="delete"> 
       <FaTrashAlt color="#9d2727" />
      </button>      
    </div>
  )}

export default TodoItem;

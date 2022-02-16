import { FaTrashAlt } from 'react-icons/fa';
function TodoItem({ item, completedDone, handleDelete }) {

  // const completedDone = () => {
  //   item.completedDone(item._id);
  // }

  // const handleDelete = (e) => {
  //   //e.preventDefault();
  //   item.handleDelete(item._id);
  // }

  const className = item.completed ? "done-todo" : "";

  return (
    <div className={`card item ${className} todo-${item._id}`}> 
      <p className="toggle-todo" onClick={() => completedDone(item._id)}>
        {item.name}
      </p>
      <button data-testid="" onClick={(e) => handleDelete(item._id)} className="delete"> 
       <FaTrashAlt color="#9d2727" />
      </button>      
    </div>
  )}

export default TodoItem;

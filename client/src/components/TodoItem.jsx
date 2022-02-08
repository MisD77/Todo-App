import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function TodoItem({ item, handleDelete }) {

  return (
    <Card>
      <div className="todo-check">
        <input type="checkbox" id="to-do-item" name="to-do-item"/>
        <label htmlFor="to-do-item">{item.name}</label>
      </div>
      <button onClick={() => handleDelete(item._id)} className="delete"> 
       <FaTrashAlt color="#9d2727" />
      </button>
    </Card>
  )}

  TodoItem.propTypes = {
    item: PropTypes.isRequired,
  }



export default TodoItem;

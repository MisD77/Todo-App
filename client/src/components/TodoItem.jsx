import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function TodoItem({ item }) {

  return (
    <Card>
      <div className="todo-check">
        <input type="checkbox" id="to-do-item" name="to-do-item"/>
        <label htmlFor="to-do-item">{item.text}</label>
      </div>
      <button className="delete"> 
       <FaTrashAlt color="#9d2727" />
      </button>
    </Card>
  )}

  TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
  }



export default TodoItem;

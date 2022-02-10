import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import Card from './shared/Card';

function TodoItem({ item, handleDelete, labelOn, labelOff }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Card>
        <label htmlFor="to-do-item">
          <input type="checkbox" checked={isChecked} onChange={onChange} />
          {isChecked ? labelOn : labelOff}
          {item.name}
      </label>
      <button onClick={() => handleDelete(item._id)} className="delete"> 
       <FaTrashAlt color="#9d2727" />
      </button>
    </Card>
  )}

export default TodoItem;

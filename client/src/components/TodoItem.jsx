import { useState } from 'react';

function TodoItem() {

  const[text, setText] = useState('Exercise');

  return (
    <div className="to-do-card">
        <input type="checkbox" id="to-do-item" name="to-do-item"/>
        <label htmlFor="to-do-item">{text}</label>
        <button> Delete </button>
    </div>
  )}

export default TodoItem;

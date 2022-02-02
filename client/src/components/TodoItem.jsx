import React from 'react';

function TodoItem() {
  return (
    <ul className="my-tasks">
        <li> 
            <div className="each-task">
                <input id="todo-0" type="checkbox" />
                <label className= "todo-label" htmlFor="todo-0">Exercise</label>
            </div>
        </li>
    </ul>
  )}

export default TodoItem;

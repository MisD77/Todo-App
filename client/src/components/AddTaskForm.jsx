import React from 'react';

function AddTaskForm() {
  return (

    <div className="add-to-list">
        <form action="#">
        <input type="text" name="new-todo-add"/>
        <input type="button" value="Add New Task"/>
    </form>
    </div>
  );
}

export default AddTaskForm;

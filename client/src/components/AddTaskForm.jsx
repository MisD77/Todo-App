import { useState } from 'react';
function AddTaskForm({ handleAdd }) {

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (text === '' && text.trim().length <= 0){
      setBtnDisabled(true);
    }
    setBtnDisabled(false);
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text !== '' && text.trim().length >= 1){
      const newTask = {
        text,
      }
      handleAdd(newTask);
    }
    setBtnDisabled(true);
    setText("");

  }

  return (
    <div className="add-to-list">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input onChange={handleTextChange} 
            type="text" 
            placeholder=' New task' 
            value={text}
            />
            <button className = "btn" type="submit" disabled={ btnDisabled }>Add </button>
          </div>
        </form>
    </div>
  );
}

export default AddTaskForm;

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
    const task = {name: text}
    handleAdd(task);
    setBtnDisabled(true);
    setText("");
  }

  return (
  <div className="input-group">
    <input 
    onChange={(e) => handleTextChange(e)}
    type="text" 
    placeholder=' New task' 
    value={text}
    />
    <button id='button' onClick={(e) => handleSubmit(e)} className = "btn" type="submit" disabled={ btnDisabled }>Add </button>
  </div>
  );
}

export default AddTaskForm;

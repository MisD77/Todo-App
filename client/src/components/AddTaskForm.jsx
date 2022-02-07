import { useState } from 'react';
function AddTaskForm() {

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (text === '' && text.trim().length <= 1){
      setBtnDisabled(true);
    }
    setBtnDisabled(false);
    setText(e.target.value);
  }

  return (
    <div className="add-to-list">
        <form action="#">
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

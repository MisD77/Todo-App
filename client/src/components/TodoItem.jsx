import Card from './shared/Card';

function TodoItem({ item }) {

  return (
    <Card>
      <div className="todo-check">
        <input type="checkbox" id="to-do-item" name="to-do-item"/>
        <label htmlFor="to-do-item">{item.text}</label>
      </div>
      
      <div className="delButton">
        <button> Delete </button>
      </div>
    </Card>
  )}

export default TodoItem;

function App() {
  return (
    <div className="todo-app">
      <h2> MY TODO APP</h2>
      <div className="select-task">
        <button className="btn new-task"> New Task</button>
        <button className="btn completed-task">Completed Task</button>
        <button className="btn active-task">Active Task</button>
      </div>
      <div>
        <ul className="my-tasks">
          <li>exercise</li>
          <li>pick up lunch</li>
          <li>self learning</li>
          <li>evening stroll</li>
          <li>check email</li>
        </ul>
      </div>
    </div>
  );
}
export default App;

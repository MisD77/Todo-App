import Header from "./components/Header";
import "./index.css";


function App() {
  return (
    <>
      <Header />
      <div className="container">
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
    </>
  );
}
export default App;

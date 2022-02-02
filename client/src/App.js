import Header from "./components/Header";
import AddToList from "./components/AddToList";
import "./index.css";


function App() {
  return (
    <>
      <Header />
      <AddToList />
      <div className="container">
        <button className="btn all-task"> All Tasks</button>
        <button className="btn active-task">Active Task</button>
        <button className="btn completed-task">Completed Task</button>
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

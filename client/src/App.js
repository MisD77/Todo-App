import Header from "./components/Header";
import AddToList from "./components/AddToList";
import "./index.css";
import VarietyTask from "./components/VarietyTask";


function App() {
  return (
    <>
      <Header />
      <AddToList />
      <VarietyTask />
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

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [data, setData] = useState(null);
useEffect(() => {
  fetch("/api")
  .then ((res) => res.json())
  .then ((data) => setData(data.message));
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading.." : data}
        </p>
        <p>
          {callDB()}
        </p>
      </header>
    </div>
  );
}

const callDB = ( () => {
  fetch("http://localhost:9000/testDB")
  .then(res => res.text())
  .then(res => this.setState({ dbResponse: res }))
  .catch(err => err);
})

export default App;

import 'bootstrap/scss/bootstrap.scss';
import './App.sass';
import React from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";


function App() {
  return (
    <div className="App container">
      <UserInput/>
      <UserOutput/>
    </div>
  );
}

export default App;

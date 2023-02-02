import logo from "./logo.svg";
import "./App.css";

import InputList from "./Components/Input_list.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 style={{ textAlign: "center" }}>My TODO APP</h2>
        <InputList></InputList>
      </div>
    </div>
  );
}

export default App;

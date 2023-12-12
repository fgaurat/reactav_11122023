import { useState } from "react";
import "./App.css";
import UseEffect from "./components/UseEffect/UseEffect";
import UseReducer from "./components/UseReducer/UseReducer";
import UseMemo from "./components/UseMemo/UseMemo";

function App() {
  const [show, setShow] = useState(false);
  console.log("render App");
  return (
    <>
      <h1>TP Hooks</h1>

      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} value
      </button>
      {show && (
        <>
          <h2>Show</h2>
          <UseEffect />
        </>
      )}
    <hr />
    <UseReducer/>
    <hr />
    <UseMemo/>

    </>
  );
}

export default App;

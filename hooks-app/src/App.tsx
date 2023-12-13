import { useCallback, useMemo, useRef, useState } from "react";
import "./App.css";
import UseEffect from "./components/UseEffect/UseEffect";
import UseReducer from "./components/UseReducer/UseReducer";
import UseMemo from "./components/UseMemo/UseMemo";
import PureComponent01 from "./components/PureComponent01/PureComponent01";
import PureComponent02 from "./components/PureComponent02/PureComponent02";
import UseRef from "./components/UseRef/UseRef";
import UseTransition from "./components/UseTransition/UseTransition";
import UseDeferredValue from "./components/UseDeferredValue/UseDeferredValue";

function App() {
  const [show, setShow] = useState(false);
  console.log("render App");
  const uneValeur = "Une valeur";

  const inputRef = useRef<HTMLInputElement>(null)
  const componentRef = useRef(null)

  const clickRef = ()=>{
    console.log(inputRef?.current?.value)
  }
  
  const clickComponentRef = ()=>{
    console.log(componentRef?.current?.theValue())
  }
  const clickComponentRefSetFocus = ()=>{
    componentRef?.current?.setFocus()
  }
  // const onClickPureComponent02 = () =>{
  //   console.log('Click onClickPureComponent02')
  // }
  // const onClickPureComponent02 = useMemo(() => {
  //   return () => {
  //     console.log("Click onClickPureComponent02");
  //   };
  // }, []);
  
  const onClickPureComponent02 = useCallback(() =>{
    console.log('Click onClickPureComponent02')
  },[])


  return (
    <>
      <h1>TP Hooks</h1>
{/* 
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
      <UseReducer />
      <hr />
      <UseMemo />
      <hr />
      <PureComponent01 value={uneValeur} />
      <hr />
      <PureComponent02 onClick={onClickPureComponent02} />
      <hr />
      
      <input type="text" defaultValue="valeur par défaut" ref={inputRef}/>
      <button onClick={()=>clickRef()}>show value</button>
      <UseRef ref = {componentRef}/>
      <button onClick={()=>clickComponentRef()}>clickComponentRef</button>
      <button onClick={()=>clickComponentRefSetFocus()}>set focus</button>
      <br /> 
      <UseTransition/>
      */}
      <UseDeferredValue/>
    </>
  );
}

export default App;

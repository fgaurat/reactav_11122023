import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount

  useEffect(() => {
    console.log("componentDidMount")
    const inter = setInterval(()=>{
        console.log("inc")
        setCount(c => c+1)

    },1000)

    return ()=>{
        console.log("componentWillUnmount")
        clearInterval(inter)
    }
  }, []);


  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const fullName = `${name} ${firstName}`
  
//   const [fullName, setFullName] = useState("");
  
//   useEffect(() => {
//     setFullName(name+" "+firstName)
//   },[name,firstName])

  return (
    <div>
      <h2>UseEffect</h2>
      <strong>{count}</strong>
      <br />
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>

      {fullName}
    </div>
  );
}

export default UseEffect;

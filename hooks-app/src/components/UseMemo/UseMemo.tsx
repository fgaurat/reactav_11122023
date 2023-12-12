import React, { useMemo, useState } from 'react'

const longWork = (t=500)=>{
    console.log("start longWork")
    const end = Date.now()+t
    while(Date.now()<end){}
    console.log("end longWork")
}

const toUpper=(value)=>{
    longWork()
    return value.toUpperCase()
}

function UseMemo() {

    const [a,setA] = useState("")
    const [b,setB] = useState("")
    // const upperB = toUpper(b)
    const upperB = useMemo(()=>toUpper(b),[b])
  return (
    <div>
    <h2>UseMemo</h2>
    a : <input type="text" onChange={e => setA(e.target.value)} placeholder='a : '/>
    b : <input type="text" onChange={e => setB(e.target.value)} placeholder='b : '/>
    <br />
    a: {a}
    <br />
    b: {b}
    <br />
    upperB : {upperB}
    <br />

    </div>
  )
}

export default UseMemo


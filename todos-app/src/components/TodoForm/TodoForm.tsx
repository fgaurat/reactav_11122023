import React, { useState } from 'react'

function TodoForm() {
    const [theValue,setTheValue] = useState("")


  return (
    <div>
    <h2>TodoForm</h2>

    <form action="">
        <input type="text" value={theValue} onChange={e => setTheValue(e.target.value)}/>
        {theValue}
    </form>
    </div>
  )
}

export default TodoForm
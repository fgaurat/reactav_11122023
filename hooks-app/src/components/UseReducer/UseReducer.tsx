import React, { useReducer } from 'react'

function reducer(state,action){

  switch(action.type){
    case "inc": return {...state,count:state.count+1}
    case "dec": return {...state,count:state.count-1}
  }
}

function UseReducer() {
  const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <div>
    <h2>UseReducer</h2>
    state : {JSON.stringify(state)}
    <button onClick={() => dispatch({type:'inc'})}>inc</button>
    <button onClick={() => dispatch({type:'dec'})}>dec</button>
    </div>
  )
}

export default UseReducer
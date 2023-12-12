import React from "react";

function PureComponent02({ onClick }) {
  console.log("render PureComponent02 ");

  return (
    <div>
      <h2>PureComponent02</h2>
      <hr />
      <button onClick={onClick}>onClick</button>
      <hr />
    </div>
  );
}
const comp = React.memo(PureComponent02)
export  default comp;

import React from "react";

function PureComponent01({ value }) {
  console.log("render PureComponent01 ", value);

  return (
    <div>
      <h2>PureComponent01</h2>
      <hr />
      value : {value}
      <hr />
    </div>
  );
}
const comp = React.memo(PureComponent01)
export  default comp;

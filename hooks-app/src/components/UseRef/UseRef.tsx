import React, { forwardRef, useImperativeHandle, useRef } from "react";

function UseRef(props, ref) {
  const inputRef = useRef<HTMLInputElement>(null);


  useImperativeHandle(ref,()=>({
    theValue:()=>inputRef?.current?.value,
    setFocus:()=>inputRef?.current?.focus(),
  }))
  return (
    <div>
      <h2>UseRef</h2>

      <input type="text" defaultValue="UseRef value" ref={inputRef} />
    </div>
  );
}

const c = forwardRef(UseRef)
export default c;

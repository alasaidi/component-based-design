import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>clicked {count} time </h1>
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        click me
      </button>
    </>
  );
}
export default UseState;

import { useState } from "react";

import "./App.css";
import UseState from "./assets/components/UseState/Usestate.jsx";
import UseEffect from "./assets/components/UseEffect/Useeffect.jsx";

function App() {
  return (
    <>
      <div className="useState">
        <UseState />
      </div>
      <div className="useEffect">
        <UseEffect />
      </div>
    </>
  );
}

export default App;

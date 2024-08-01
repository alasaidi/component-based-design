import "./App.css";
import UseState from "./assets/components/UseState/Usestate.jsx";
import UseEffect from "./assets/components/UseEffect/Useeffect.jsx";
import UseContext from "./assets/components/useContext/Usecontext.jsx";

function App() {
  return (
    <>
      <div className="useState">
        <UseState />
      </div>
      <div className="useEffect">
        <UseEffect />
      </div>
      <div className="useContext">
        <UseContext />
      </div>
    </>
  );
}

export default App;

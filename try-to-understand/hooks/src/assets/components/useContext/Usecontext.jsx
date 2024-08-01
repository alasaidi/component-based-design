import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button style={{ background: theme === "light" ? "#fff" : "#000", color: theme === "light" ? "#000" : "#fff" }} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
};
function UseContext() {
  console.log("Rendering UseContext component");
  return (
    <ThemeProvider>
      <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
        <h1>My App</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}
export default UseContext;

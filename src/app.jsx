import React from "react";
import { createRoot } from "react-dom";
import "./style.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;

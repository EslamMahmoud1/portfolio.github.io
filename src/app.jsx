import React from "react";
import { createRoot } from "react-dom";
import "./style.css";
import Navbar from "./component/Navbar";

const App = () => {
  return <Navbar />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;

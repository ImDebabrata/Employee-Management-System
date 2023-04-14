import { useState } from "react";
import "./App.css";
import AddEmployee from "./pages/AddEmployee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddEmployee />
    </div>
  );
}

export default App;

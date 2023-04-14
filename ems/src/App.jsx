import { useState } from "react";
import "./App.css";
import AddEmployee from "./pages/AddEmployee";
import Navbar from "./components/Navbar";
import AllEmployee from "./pages/AllEmployee";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AddEmployee /> */}
      <AllEmployee />
    </div>
  );
}

export default App;

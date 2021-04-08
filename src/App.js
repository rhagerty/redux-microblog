import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Routes from "./Routes";

function App() {
  return (
    <main>
      
      <div className="container">
        <h1 className="mt-3">Microblog</h1>
        <h3>Get in the Rithm of blogging!</h3>
        <Navbar />
        <Routes />
      </div>
    </main>
  );
}

export default App;

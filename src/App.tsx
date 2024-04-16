import React from "react";
import "./App.css";
import Add from "./components/Add";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <div className={"app-container"}>
        <h1 className={"app-title"}>Blazesoft Bookstore</h1>
        <span className={"header-container"}>
        <h1>List of Books</h1>
        <Add/>
      </span>
        <Table/>
      </div>
    </div>
  );
}

export default App;

import React from "react";

import "./App.css";
import TaskList from "./Container/TaskList";
import AddTask from "./Container/AddTask";
import EditTask from "./Container/EditTask";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

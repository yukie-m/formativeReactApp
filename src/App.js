import React from "react";
import "./App.css";
import Products from "./Components/Products";
import Login from "./Components/Login";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Products</Link>
      <br />
      <Link to="/login">User Login</Link>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Products />
    </div>
  );
}

export default App;

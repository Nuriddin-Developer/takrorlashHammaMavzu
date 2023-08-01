import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Main from "./Main"
import Config from "./Context/Config";
export default function App() {
  return (
    <>
    <Config/>
      <div className="app">
        <Navbar/>
        <Main/>
      </div>
    </>
  );
}

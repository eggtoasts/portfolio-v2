import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function Social() {}

function App() {
  // We'll have main, project1, project2
  const [currentPage, setCurrentPage] = useState("Projects");

  return (
    <>
      <div className="app-layout">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* main page will be here */}
        <div className="main-content">
          <p>{"so our current page is --> " + currentPage}</p>
        </div>
      </div>
    </>
  );
}

export default App;

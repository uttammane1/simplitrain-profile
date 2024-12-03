import React from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Profile />
        <Education />
        <WorkExperience />
      </main>
    </div>
  );
}

export default App;

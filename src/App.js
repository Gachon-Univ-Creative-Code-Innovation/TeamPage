import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { TeamPage } from "./components/TeamPage";
import { MemberDetail } from "./components/Memberdetail";
import { ProjectDetail } from "./components/ProjectDetail";
import rectangle4 from "./assets/pic1.png";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="global-fixed-header">
        <Link to="/">
          <img src={rectangle4} alt="logo" className="rectangle" />
        </Link>
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<TeamPage />} />
          <Route path="/member/:id" element={<MemberDetail />} />
          <Route path="/project" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

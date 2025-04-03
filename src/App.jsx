import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Container, Box } from "@mui/material";

const App = () => {
  return (
    <Router>
      <DrawerAppBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

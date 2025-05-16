import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MarketApp from "./pages/MarketApp";
import Indexbar from "./components/Indexbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* <Indexbar /> */}
          <Route  path="/" element={<Home />} />
          <Route path="/market" element={<MarketApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

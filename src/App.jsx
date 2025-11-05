import React from "react";
import Home from "./Pages/Home";
import SmartWatches from "./Pages/SmartWatches";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AdminPanel from "./Pages/AdminPanel";
import AddToCart from "./Components/AddToCart/AddToCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/SmartWatches" element={<SmartWatches />} />
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

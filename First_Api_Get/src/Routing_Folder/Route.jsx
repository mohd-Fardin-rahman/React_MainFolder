import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ProductCard from "../Component/ProductCard";
import NavigationBar from "../Component/Navbar";
import Cars from "../Component/Cars";
import Cloths from "../Component/Cloths";
import Shoes from "../Component/Shoes";


function Routing() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductCard />} />

        <Route path="/Cars" element={<Cars />} />
        <Route path="/Cloths" element={<Cloths />} />
        <Route path="/Shoes" element={<Shoes />} />

       
      </Routes>
      
    </Router>
  );
}

export default Routing;

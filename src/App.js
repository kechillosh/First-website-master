import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Contact from "./Components/Contact";
import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Footer from "./Components/Footer";
import Map from "./Components/Map.js";
import NoCheckout from "./Components/NoCheckout";
import XML from "./Components/XML";
import peste30 from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'
import Lux from './Components/lux'


function App() {
  // Set a boolean flag to determine whether to show the footer or not
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CheckoutForm" element={<Map />} />
            <Route
              path="/NoCheckout"
              element={<NoCheckout setShowFooter={setShowFooter} />}
            />
          </Route>
          <Route path="/XML" element={<XML />} />
          <Route path="/Lux" element={<Lux />} />
          <Route path="/peste30" element={<Lux />} />
          <Route path="/sport" element={<Lux />} />
          <Route path="/sub30" element={<Lux />} />
          <Route path="/media" element={<Lux />} />
          <Route path="/peste 500lei" element={<Lux />} />
          <Route path="/sub 500 lei" element={<Lux />} />
          <Route path="/SortNegru" element={<Lux />} />
          <Route path="/SortAlb" element={<Lux />} />
          <Route path="/TipCarb" element={<Lux />} />
        </Routes>
      </Router>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;

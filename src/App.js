import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Contact from "./Components/Contact";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import Map from "./Components/Map.js";
import NoCheckout from "./Components/NoCheckout";
import XML from "./Components/XML";
import Peste30 from "./Components/peste30";
import Peste500 from './Components/peste500'
import Sub30 from './Components/sub30'
import Sub500 from './Components/sub500'
import Alb from './Components/sortareAlb'
import Negru from './Components/sortareNegru'


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
          <Route path="/peste30" element={<Peste30  />} />
          <Route path="/sub30" element={< Sub30  />} />
          <Route path="/peste500" element={< Peste500  />} />
          <Route path="/sub500" element={<Sub500  />} />
          <Route path="/SortNegru" element={<Negru  />} />
          <Route path="/SortAlb" element={<Alb  />} />

        
        </Routes>
      </Router>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;

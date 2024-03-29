import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { TfiAlignJustify } from "react-icons/tfi";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Home = (
    <Link className="navLink" to="/" onClick={handleDropdownItemClick}>
      Home
    </Link>
  );
  const Locations = (
    <Link className="navLink" to="/Locations" onClick={handleDropdownItemClick}>
      Locations
    </Link>
  );
  const Contact = (
    <Link className="navLink" to="/Contact" onClick={handleDropdownItemClick}>
      Contact
    </Link>
  );

  const Xml = (
    <Link className="navLink" to="/Xml" onClick={handleDropdownItemClick}>
      Xml
    </Link>
  );
  function handleDropdownItemClick() {
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        <TfiAlignJustify />
      </button>
      {isOpen && (
        <ul>
          <li>{Home}</li>
          <li>{Locations}</li>
          <li>{Contact}</li>
          <li>{Xml}</li>
        </ul>
      )}
    </div>
  );
};
export default DropdownMenu;

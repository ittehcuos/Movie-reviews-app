import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { FaFilm } from 'react-icons/fa';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
       <li className="nav__item"  >
              <div style={{color:'yellow'}} >
              <FaFilm className="logo" size={70}  />
              </div>
       </li>
      <ul className={active}>
        <li className="nav__item">
          <Link to='/' className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/details/:id' className="nav__link">
            Details
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/login' className="nav__link">
            Login
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/formulario' className="nav__link">
            Registrate
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;

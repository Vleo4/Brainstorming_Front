import React, { useState } from "react";
import LogoPhoto2 from "../assets/logo 6.png";
import "../styles/Navbar.css";

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">   
      <img src={LogoPhoto2} />
      <a className="nav-logo" href="/">BRAINSTORMING</a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>   
        <a href="/download">DOWNLOAD</a>
        <a href="https://send.monobank.ua/jar/5Femsf3XqZ"
        target="blank">SUPPORT US</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

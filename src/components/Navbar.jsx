import {
  faMoon,
  faUser,
  faLightbulb,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/Navbar.css";
import LogoPhoto from "..//assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({
  setIsAboutPage,
  isAboutPage,
  toggleTheme,
  toggleMenu,
  isOpen,
  isMoon,
}) => {

  return (
    <div>
      <nav
        className={`navbar${
          window.location.pathname !== "/" && isAboutPage ? " white-bg" : ""
        }`}
      >
        <div className="navbar-left">
          <Link
            to="/"
            onClick={() => {
              setIsAboutPage(false);

              window.scrollTo(0, 0);
            }}
          >
            <img src={LogoPhoto} alt="" className="navbar-logo" />
          </Link>
        </div>
        <div className="navbar-center">
          <div className="left-col">
            <Link
              to="/"
              className="navbar-item"
              onClick={() => {
                setIsAboutPage(false);

                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="navbar-item"
              onClick={() => {
                setIsAboutPage(true);

                window.scrollTo(0, 0);
              }}
            >
              About
            </Link>
          </div>
          <div className="right-col">
            <Link
              to="/team"
              className="navbar-item"
              onClick={() => {
                setIsAboutPage(true);

                window.scrollTo(0, 0);
              }}
            >
              Our Team
            </Link>

            <a
              href="https://send.monobank.ua/jar/5Femsf3XqZ"
              target="blank"
              className="navbar-item"
              onClick={() => {
                setIsAboutPage(true);
              }}
            >
              Support Us
            </a>
          </div>
        </div>
        <div className="navbar-right">
          <FontAwesomeIcon
            icon={
              document.body.classList.contains("dark-theme")
                ? faLightbulb
                : faMoon
            }
            className="navbar-icon icon-moon"
            onClick={toggleTheme}
          />
          {!isOpen && (
            <FontAwesomeIcon
              icon={faUser}
              className="navbar-icon icon-profile"
            />
          )}
        </div>
        <div className="navbar-burger" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="navbar-burger-icon"
          />
        </div>
      </nav>

      <div className="navbar-menu">
        <div className="navbar-item burger-item special-item">
          <FontAwesomeIcon icon={faUser} className="profile-burger" />
          <div className="hide-text">My Profile</div>
        </div>
        <Link
          to="/"
          className="navbar-item burger-item"
          onClick={() => {
            setIsAboutPage(false);

            window.scrollTo(0, 0);
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="navbar-item burger-item"
          onClick={() => {
            setIsAboutPage(true);

            window.scrollTo(0, 0);
          }}
        >
          About
        </Link>
        <Link
          to="/team"
          className="navbar-item burger-item"
          onClick={() => {
            setIsAboutPage(true);

            window.scrollTo(0, 0);
          }}
        >
          Our Team
        </Link>
        <a
          href="https://send.monobank.ua/jar/5Femsf3XqZ"
          target="blank"
          className="navbar-item burger-item"
          onClick={() => {
            setIsAboutPage(true);
          }}
        >
          Support Us
        </a>
        <div
          className="navbar-item burger-item special-item"
          onClick={toggleTheme}
        >
          <div className="hide-text">{isMoon ? "Night Mode" : "Day Mode"}</div>
          <FontAwesomeIcon
            icon={
              document.body.classList.contains("dark-theme")
                ? faLightbulb
                : faMoon
            }
            className="profile-burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

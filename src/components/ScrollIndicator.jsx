import React, { useState, useEffect } from "react";
import "..//styles/ScrollIndicator.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollIndicator = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowUp}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className={`scroll-icon ${visible ? "visible" : ""}`}
      />
    </div>
  );
};

export default ScrollIndicator;

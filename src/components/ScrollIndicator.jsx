import React, { useState, useEffect } from 'react';
import "..//styles/ScrollIndicator.css";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";


const ScrollIndicator = () => {
    const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 768) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 768) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      {showScroll && (
        <div className="scrollTop" onClick={scrollTop}>
          <i className="fa fa-arrow-up"></i>
        </div>
      )}
    </>
  );  
}

export default ScrollIndicator
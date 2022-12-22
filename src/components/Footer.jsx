import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "..//styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="mailto:saton.inco@gmail.com">
          <GoogleIcon/>
        </a>
        <a href="https://www.linkedin.com/in/volodya-peleshchyshyn-862465246"
        target="blank">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; Saton Team, 2022 </p>
    </div>
  );
}

export default Footer;

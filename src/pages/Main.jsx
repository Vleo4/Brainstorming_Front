import React, { useEffect } from "react";
import "../styles/Main.css";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoPhoto from "..//assets/logo.svg";
import SwiperDiv from "../components/Swiper";
import ScrollIndicator from "../components/ScrollIndicator";
const Main = () => {

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
    <div className="main">
      <ScrollIndicator />

      <div className="container-main">
        <div className="container-content">
          <div className="header">
            <img src={LogoPhoto} alt="" className="header-logo" />
            <h1 className="article">BRAINSTORMING</h1>
          </div>
          <div className="content">
            <div className="text-content-wrapper">
              <p className="text-content">
                Unlock Your Mind's Potential with Saton's Innovative Apps!
              </p>
            </div>
            <div className="getstarted-wrapper">
              <a href="#" className="get-started">
                Get started
              </a>
            </div>
          </div>
          <div className="almost-footer">
            <p className="almost-footer-text">Contact with us</p>
            <div className="almost-footer-icons">
              <a href="mailto:saton.inco@gmail.com" className="aficon">
                <GoogleIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/volodya-peleshchyshyn-862465246"
                target="blank"
                className="aficon"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-between"></div>
      <div className="mid-container">
        <div className="bgphoto-container">
          <div className="container-content-mid">
            <div className="header-mid">
              <h1 className="article-mid">Try our app for free now!</h1>
            </div>
            <div className="text-content-mid">
              <p className="text-mid">
                The goal of our program is the artificial release of dopamine
                with the help of physical and arithmetical exercises. To develop
                the prefrontal cortex, we use simple and effective arithmetic
                examples. Based on an experiment conducted at Tohoku University,
                we selected the most effective exercises. In our program you
                will find problems that contain one unknown number, as well as
                magic squares and many other interesting exercises. You will
                also find physical exercises there that will help you keep your
                body in good shape. Exercise is one of the best activities for
                the brain and body.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-container-content">
          <div className="header-bottom">
            <h1 className="article-bottom">Lastest news</h1>
          </div>
          <div className="swiper-wrapper">
            <SwiperDiv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

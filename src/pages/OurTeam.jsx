import React, { useEffect } from "react";
import "..//styles/OurTeam.css";
import Photo from "..//assets/Unknown.png";
import ScrollIndicator from "../components/ScrollIndicator";

const OurTeam = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
    <div>
      <ScrollIndicator/>
      <div className="team-container">
        <div className="team-wrapper">
          <h1 className="team-article">OUR TEAM</h1>
          <div className="team-content-container">
            <div className="team-card">
              <div className="team-card-inner">
                <img src={Photo} alt="" className="team-card-photo" />
              </div>
            </div>
            <div className="team-text-content">
              <h2 className="team-text-name">Volodymyr Peleshchyshyn</h2>
              <h3 className="team-position">CEO, Founder</h3>
              <p className="team-text">
                Student of Lviv Polytechnic National University (Faculty of
                Applied Math), entrepreneur, playboy, hater of all russians,
                mustache enjoyer.
              </p>
            </div>
          </div>
        </div>
        <div className="team-wrapper">
          <div className="team-content-container">
            <div className="team-card">
              <div className="team-card-inner">
                <img src={Photo} alt="" className="team-card-photo" />
              </div>
            </div>
            <div className="team-text-content">
              <h2 className="team-text-name">
                <a
                  className="team-text-name Tyubik"
                  target="blank"
                  href="https://www.instagram.com/p/CSyd6h8DDhg/?igshid=YmMyMTA2M2Y="
                  data-toggle="popover"
                  title="Я ТЮБІК ДЖОНІКОВИЧ"
                >
                  Ostap
                </a>{" "}
                Borschevskiy
              </h2>
              <h3 className="team-position">Co-Founder</h3>
              <p className="team-text">
                papa peve gima bodi
              </p>
            </div>
          </div>
        </div>
        <div className="team-wrapper">
          <div className="team-content-container">
            <div className="team-card">
              <div className="team-card-inner">
                <img src={Photo} alt="" className="team-card-photo" />
              </div>
            </div>
            <div className="team-text-content">
              <h2 className="team-text-name">Artem Fedevych</h2>
              <h3 className="team-position">Designer</h3>
              <p className="team-text">
              Brrr skibidi dop dop dop dop yes yes yes yes
              </p>
            </div>
          </div>
        </div>
        <div className="team-wrapper last">
          <div className="team-content-container">
            <div className="team-card">
              <div className="team-card-inner">
                <img src={Photo} alt="" className="team-card-photo" />
              </div>
            </div>
            <div className="team-text-content">
              <h2 className="team-text-name">Vitaliy Mitnichuk</h2>
              <h3 className="team-position">Web Developer, CIO</h3>
              <p className="team-text">
                Student of Lviv Polytechnic National University (Institute of
                Computer Science), car enthusiast, hater of everything russian,
                Volodymyr`s mustache enjoyer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

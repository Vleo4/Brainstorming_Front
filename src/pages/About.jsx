import React, { useEffect, useState } from "react";
import "..//styles/About.css";
import ScrollIndicator from "../components/ScrollIndicator";

const About = () => {
  const [showText, setShowText] = useState(
    localStorage.getItem("showText") === "true" ? true : false
  );
  const [showText2, setShowText2] = useState(
    localStorage.getItem("showText2") === "true" ? true : false
  );
  const [showText3, setShowText3] = useState(
    localStorage.getItem("showText3") === "true" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("showText", showText);
    localStorage.setItem("showText2", showText2);
    localStorage.setItem("showText3", showText3);
  }, [showText, showText2, showText3]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
    <div>
      <ScrollIndicator/>
      <div className="about-container">
        <div className="about-content-container first">
          <div className="about-wrapper">
            <h1 className="about-article">ABOUT PROJECT</h1>
            <div className="subtitle-wrapper">
              <h2 className="about-subtitle first-subtitle">
                What is dopamine responsible for?
              </h2>
            </div>
            <p
              className="about-text"
              style={{ display: showText ? "block" : "none" }}
            >
              Dopamine is a neurotransmitter, a biologically active chemical
              substance that transmits an emotional response in the human brain
              and allows you to feel pleasure and not feel pain. It is also a
              neurotransmitter responsible for movement, so it is produced in
              certain brain cells that control muscle activity.<br></br>
              <br></br> Dopamine causes feelings of happiness and euphoria.
              Dopamine is also one of the main components of the biochemical
              mechanism of falling in love — the brain of a person in love
              begins to rapidly produce dopamine. An increase in the
              concentration of dopamine is observed during the consumption of
              pleasant-tasting food or work for a good reward. The use of
              addictive substances: alcohol, nicotine or cocaine temporarily
              increases the concentration of dopamine in the brain. Those who
              suffer from depression have low levels. Also, the lack of dopamine
              leads to slowing down and retardation of cognitive processes in
              the human brain, stiffness of movements, difficulty walking, and
              limitation of motor activity.<br></br>
              <br></br> Dopamine is a vital substance, the lack of which causes
              poor health (depressed emotional state) and also leads to very
              serious disorders of movement and muscle activity (for example,
              Parkinson's disease).<br></br>
              <br></br>
              In addition to its neurotransmitter properties in the central
              nervous system, dopamine acts as a hormone. It has a specific
              effect on the function of the cardiovascular system — it increases
              systolic blood pressure as a result of stimulation of
              α-adrenoceptors, increases the strength of heart contractions as a
              result of stimulation of β-adrenoceptors, increases cardiac output
              and heart rate. Dopamine also causes dilatation of kidney vessels,
              increases diuresis and natriuresis, increases the synthesis of
              prostaglandins by kidney tissue, and stimulates the exocrine
              function of the pancreas.<br></br>
              <br></br> To do this, we created a program that promotes the
              release of dopamine in the body.
            </p>
            <p className="expand-text" onClick={() => setShowText(!showText)}>
              {" "}
              {showText ? "READ LESS" : "READ MORE"}
            </p>
          </div>
        </div>

        <div className="about-content-container second">
          <div className="about-wrapper">
            <div className="subtitle-wrapper">
              <h2 className="about-subtitle second-subtitle">
                What does the prefrontal cortex do and how to develop it?
              </h2>
            </div>
            <p
              className="about-text"
              style={{ display: showText2 ? "block" : "none" }}
            >
              The prefrontal cortex (Cortex praefrontalis) is a section of the
              cortex of the large hemispheres of the brain, which is the front
              part of the frontal lobes.<br></br>
              <br></br> This part of the brain ensures the planning of complex
              cognitive behavior, the expression of personality,
              decision-making, and the regulation of social behavior. The main
              purpose is the coordination of thoughts and actions in accordance
              with internal goals. A typical psychological term for the
              functions performed by the prefrontal cortex is executive
              function. It is associated with the ability to identify
              conflicting thoughts, predict future consequences of current
              actions (good and bad, good and better, same and different), act
              towards a certain goal, predict outcomes, action-based
              expectations, and social "control" (the ability to suppress
              thoughts that may lead to socially unacceptable results).<br></br>
              <br></br> The basic function of the prefrontal cortex is the
              complex control of mental and motor activity in accordance with
              internal goals and plans. It plays a major role in the creation of
              complex cognitive schemes and action plans, decision-making,
              control and regulation of both internal activity and social
              behavior and interaction. The control functions of the prefrontal
              cortex are manifested in the differentiation of conflicting
              thoughts and motives and the choice between them, differentiation
              and integration of objects and concepts, prediction of the
              consequences of real activity and its adjustment in accordance
              with the desired result, emotional regulation, volitional control,
              concentration of attentionon necessary objects.<br></br>
              <br></br> In order to develop the prefrontal cortex of the brain,
              there are simple arithmetical exercises that you can find in our
              program.
            </p>
            <p className="expand-text" onClick={() => setShowText2(!showText2)}>
              {" "}
              {showText2 ? "READ LESS" : "READ MORE"}
            </p>
          </div>
        </div>

        <div className="about-content-container third">
          <div className="about-wrapper">
            <div className="subtitle-wrapper">
              <h2 className="about-subtitle third-subtitle">
                What does the prefrontal cortex do and how to develop it?
              </h2>
            </div>
            <p
              className="about-text"
              style={{ display: showText3 ? "block" : "none" }}
            >
              The prefrontal cortex (Cortex praefrontalis) is a section of the
              cortex of the large hemispheres of the brain, which is the front
              part of the frontal lobes.<br></br>
              <br></br> This part of the brain ensures the planning of complex
              cognitive behavior, the expression of personality,
              decision-making, and the regulation of social behavior. The main
              purpose is the coordination of thoughts and actions in accordance
              with internal goals. A typical psychological term for the
              functions performed by the prefrontal cortex is executive
              function. It is associated with the ability to identify
              conflicting thoughts, predict future consequences of current
              actions (good and bad, good and better, same and different), act
              towards a certain goal, predict outcomes, action-based
              expectations, and social "control" (the ability to suppress
              thoughts that may lead to socially unacceptable results).<br></br>
              <br></br> The basic function of the prefrontal cortex is the
              complex control of mental and motor activity in accordance with
              internal goals and plans. It plays a major role in the creation of
              complex cognitive schemes and action plans, decision-making,
              control and regulation of both internal activity and social
              behavior and interaction. The control functions of the prefrontal
              cortex are manifested in the differentiation of conflicting
              thoughts and motives and the choice between them, differentiation
              and integration of objects and concepts, prediction of the
              consequences of real activity and its adjustment in accordance
              with the desired result, emotional regulation, volitional control,
              concentration of attentionon necessary objects.<br></br>
              <br></br> In order to develop the prefrontal cortex of the brain,
              there are simple arithmetical exercises that you can find in our
              program.
            </p>
            <p className="expand-text" onClick={() => setShowText3(!showText3)}>
              {" "}
              {showText3 ? "READ LESS" : "READ MORE"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

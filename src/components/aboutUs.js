import React, { useState, useEffect, useRef } from "react";
import "./../css/aboutUs.css";
import Img2 from "../images/home-image.jpg";
import coffee from "../images/coffee_icon.png";
import bread from "../images/bread_icon.png";
import ice_cream from "../images/ice_cream_icon.png";
import donut from "../images/donut_icon.png";
import cookie from "../images/cookie_icon.png";
import pie from "../images/pie_icon.png";
import juice from "../images/juice_icon.png";

const AboutUs = (props) => {
  const AboutProps = props.propsLang.enabledLang.aboutUs;
  const langFooter = props.propsLang.enabledLang.main.FooterInfo;

  var icon_array = [bread, donut, cookie, coffee, ice_cream, pie, juice];

  const moreRef = useRef();
  const executeScroll = () => {
    moreRef.current.scrollIntoView();
  };

  //MORE BUTTON
  const MoreBtn = () => {
    return (
      <div>
        <button onClick={executeScroll} className="more-btn">
          {AboutProps.HeaderBtn}
        </button>
      </div>
    );
  };
  //MORE BUTTON

  const FirstSection = (props) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      if (counter < 30) {
        setTimeout(() => setCounter(counter + 1), 100);
      }
    });
    return (
      <div className="about-section">
        <div className="counter">
          <h1>
            <span className="counterDigit">{counter}+</span> <br />
            {AboutProps.CounterText}
          </h1>
        </div>
      </div>
    );
  };

  const InfoSection = (props) => {
    return (
      <section ref={moreRef} id="info-section">
        <div className="grid-text">
          <h3>{AboutProps.InfoText}</h3>
        </div>
        <div className="grid-info">
          {langFooter.map((item) => {
            return (
              <div className="grid-info-item">
                <p>{item.key}</p>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="grid-gallery">
          <img className="grid-img1" src={Img2} alt="0" />
          <img className="grid-img2" src={Img2} alt="0" />
          <img className="grid-img3" src={Img2} alt="0" />
          <img className="grid-img4" src={Img2} alt="0" />
          <img className="grid-img5" src={Img2} alt="0" />
          <img className="grid-img6" src={Img2} alt="0" />
        </div>
      </section>
    );
  };

  return (
    <section id="about-us">
      <div className="about-us-title-div">
        <div className="first-div">
          <h1 style={{ marginTop: "0px" }}>{AboutProps.HeaderH1}</h1>
          {/* <p>{AboutProps.HeaderP}</p>
          <MoreBtn /> */}
        </div>
      </div>
      <div className="second-div">
        <FirstSection props={AboutProps} />
      </div>
      <div className="infoDiv">
        <InfoSection props={AboutProps} />
      </div>
      <div className="third-div">
        {icon_array.map((item) => {
          return <img src={item} alt="" />;
        })}
      </div>
    </section>
  );
};

export default AboutUs;

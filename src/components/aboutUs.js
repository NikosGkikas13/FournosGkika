import React, { useState, useEffect, useRef } from "react";
import "./../css/aboutUs.css";
import Img1 from "../images/contact-us-background.png";
import Img2 from "../images/home-image.jpg";
import Img3 from "../images/contact-us-background.png";
import Img4 from "../images/pexels-maria-orlova-4916562.jpg";
import axios from "axios";
import about_photo from "../images/slider/fournos17-min.jpg";

const AboutUs = (props) => {
  const AboutProps = props.propsLang.enabledLang.aboutUs;
  //   fetch("https://api.example.com/items")

  const [img, setImg] = useState(Img2);

  const fs = require("fs");
  const path = require("path");
  const axios = require("axios");
  const yaml = require("js-yaml");
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
        {/* <div className="counter-text">
          <p></p>
        </div> */}
      </div>
    );
  };

  const SecondSection = (min, max, defaultState, label, props) => {
    const [range, setRange] = useState(defaultState);
    //Slider
    const useSlider = (min, max, defaultState, label, id) => {
      const [state, setSlide] = useState(defaultState);
      const handleChange = (e) => {
        // console.log('setting level', e.target.value)
        setSlide(e.target.value);
      };

      const props = {
        type: "range",
        id,
        min,
        max,
        step: 1,
        value: state,
        onChange: handleChange,
      };
      return props;
    };
    //Slider

    const sliderProps = useSlider(1, 4, 1, "Threshold", "threshold");
    const Test2 = (props) => {
      return (
        <>
          <img
            className="fade-in"
            src={
              require(`./../images/${
                AboutProps.InputRangeData[sliderProps.value - 1].url
              }`).default
            }
          />
        </>
      );
    };

    return (
      <div className="range-div">
        <div className="img-container"></div>
        <Test2 />
        {/* <img className="fade-in"src={require(`./../images/${InputRangeData[sliderProps.value-1].url}`).default}/> */}
        <div className="range-and-text">
          <input {...sliderProps} />
          <p>{AboutProps.InputRangeData[sliderProps.value - 1].text} </p>
        </div>
      </div>
    );
  };

  const InfoSection = (props) => {
    return (
      <section ref={moreRef} id="info-section">
        <img src={about_photo} alt="" />
        <h1>{AboutProps.InfoText}</h1>
      </section>
    );
  };

  const ReviewSection = () => {
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJeQ2S19F5oRQRUHyuNT1uKbo&key=AIzaSyDr3yKXHxQ6dezIzja6-JcPnvCOZRJuyl8";

    return (
      <>
        <h1>Reviews</h1>
        <div id="google-reviews"></div>
      </>
    );
  };

  return (
    <section id="about-us">
      <div className="about-us-title-div">
        <div className="first-div">
          <h1 style={{ marginTop: "0px" }}>{AboutProps.HeaderH1}</h1>
          <p>{AboutProps.HeaderP}</p>
          <MoreBtn />
        </div>
      </div>
      <div className="second-div">
        <FirstSection props={AboutProps} />
      </div>
      <div className="infoDiv">
        <InfoSection props={AboutProps} />
      </div>
      <div className="third-div">
        <SecondSection props={AboutProps} />
      </div>
      {/* <div className="reviews-div">
                <ReviewSection/>
            </div> */}
    </section>
  );
};

export default AboutUs;

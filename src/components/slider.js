import React, { useRef, useState, useEffect } from "react";
import "./../css/slider.css";
import { sliderImages } from "../data/sliderImages";

const Slider = () => {
  const SliderButton = (props) => {
    return <button></button>;
  };
  //Dots Ref
  var dotRef = useRef({});

  //Swipe functionality
  const galleryRef = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDown = (e) => {
    isDown = true;
    galleryRef.current.classList.add("active");
    startX = e.pageX - galleryRef.current.offsetLeft;
    scrollLeft = galleryRef.current.scrollLeft;
  };
  const mouseLeave = () => {
    isDown = false;
    galleryRef.current.classList.remove("active");
  };

  const mouseup = () => {
    isDown = false;
    galleryRef.current.classList.remove("active");
  };

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const SCROLL_SPEED = 2;
    const walk = (x - startX) * SCROLL_SPEED;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };
  //Swipe functionality
  return (
    <>
      <ul
        class="gallery"
        ref={galleryRef}
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeave}
        onMouseUp={mouseup}
        onMouseMove={mouseMove}
      >
        {sliderImages.map((item) => {
          return (
            <li className="sliderImageContainer">
              <img
                className="sliderImage"
                ref={(element) => (dotRef.current[item.id] = element)}
                id={item.id}
                src={require(`./../images/slider/${item.url}`).default}
              />
            </li>
          );
        })}
      </ul>
      <div class="dots">
        {sliderImages.map((item) => {
          return (
            <button
              id={item.id}
              onClick={() =>
                dotRef.current[item.id].scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
            >
              <i class="fas fa-circle"></i>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Slider;

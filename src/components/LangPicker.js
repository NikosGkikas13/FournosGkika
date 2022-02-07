import React, { useState, useRef } from "react";
import { en, gr } from "../data/translation";

const LangPicker = (props) => {
  const [show, setShow] = useState(false);
  const disableLAngRef = useRef();
  const handleClick = () => {
    setShow(!show);
  };
  const changeDisabledLang = () => {
    props.enabledLang == gr ? console.log("it is gr") : console.log("it is en");
  };
  const changeLang = () => {
    setShow(!show);
  };
  const classes = [`lang-btn-disabled fc ${show ? "" : "hide"}`];

  return (
    <div class="langPicker">
      <button className="lang-btn-enabled fc" onClick={handleClick}>
        <img src={props.propsLang.enabledLang.navImg} />
        <i class="fas fa-sort-down"></i>
      </button>
      <button className={classes} onClick={props.propsLang.handleLang}>
        <img
          ref={disableLAngRef}
          src={
            props.propsLang.disableLAngRef == gr
              ? props.propsLang.disabledLang.navImg
              : props.propsLang.disabledLang.navImg
          }
        />
        <i class="fas fa-sort-down"></i>
      </button>
    </div>
  );
};
export default LangPicker;

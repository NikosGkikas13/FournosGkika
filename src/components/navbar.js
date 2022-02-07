import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Logo from "../images/logo.png";
import { en, gr } from "../data/translation";
import LangPicker from "./LangPicker";

const Navbar = (props) => {
  const [lang, setLang] = useState(en);
  const [isMobileMenu, setisMobileMenu] = useState(false);
  const checkWindowWidth = () => {
    if (window.innerWidth <= 768) {
      setisMobileMenu(true);
    } else if (window.innerWidth > 768) {
      setisMobileMenu(false);
    }
  };
  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", () => {
      checkWindowWidth();
      console.log(isMobileMenu);
    });
  });

  // props.changeLang(gr);
  // console.log(props.enabledLang);
  const DesktopMenu = () => {
    // LANGUAGE PICKER
    // const LangPicker = () => {
    //   const [show, setShow] = useState(false);
    //   const disableLAngRef = useRef();

    //   const handleClick = () => {
    //     setShow(!show);
    //   };
    //   const changeDisabledLang = () => {
    //     lang == gr ? setLang(en) : setLang(gr);
    //   };
    //   const changeLang = () => {
    //     setShow(!show);
    //   };
    //   const classes = [`lang-btn-disabled fc ${show ? "" : "hide"}`];
    //   return (
    //     <>
    //       <button className="lang-btn-enabled fc" onClick={handleClick}>
    //         <img src={lang.navImg} />
    //         <i class="fas fa-sort-down"></i>
    //       </button>
    //       <button className={classes} onClick={changeDisabledLang}>
    //         <img
    //           ref={disableLAngRef}
    //           src={lang == gr ? en.navImg : gr.navImg}
    //         />
    //         <i class="fas fa-sort-down"></i>
    //       </button>
    //     </>
    //   );
    // };

    // LANGUAGE PICKER
    return (
      <>
        <div>
          <Link to="/" className="logo">
            <img
              className="logo"
              src={require(`./../images/logo.png`).default}
            />
          </Link>
        </div>
        <div className="langDiv">
          {props.propsLang.enabledLang.nav.map((link) => {
            return (
              <>
                <Link to={link.path}>{link.name}</Link>
              </>
            );
          })}
          <LangPicker propsLang={props.propsLang} />
        </div>
      </>
    );
  };
  const MobileMenu = () => {
    const [show, setShow] = useState(false);
    const [enabledlang, setEnabledLang] = useState(en);
    const [disabledLang, setDisabledLang] = useState(
      enabledlang == en ? gr : en
    );
    const showSubMenu = () => {
      setShow(!show);
      console.log(show);
    };

    return (
      <div className="mobile-menu">
        <div onClick={showSubMenu}>
          <div className="mobimeMenuIcon"></div>
          <div className="mobimeMenuIcon"></div>
          <div className="mobimeMenuIcon"></div>
        </div>
        <Submenu
          show={show}
          propsLang={props.propsLang}
          // enabledLanguage={enabledlang}
          // disabledLanguage={disabledLang}
        />
      </div>
    );
  };
  const Submenu = (props) => {
    const classes = [`submenu ${props.show ? "submenu-active" : ""}`];
    console.log(props.propsLang);
    return (
      <div className={classes}>
        <div className="logo-div">
          <Link to="/" className="logo">
            <img
              className="logo"
              src={require(`./../images/logo.png`).default}
            />
          </Link>
        </div>
        <div className="links">
          {props.propsLang.enabledLang.nav.map((link) => {
            return (
              <>
                <Link to={link.path}>{link.name}</Link>
              </>
            );
          })}
        </div>
        <LangPicker propsLang={props.propsLang} />
      </div>
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {isMobileMenu ? <MobileMenu /> : <DesktopMenu />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

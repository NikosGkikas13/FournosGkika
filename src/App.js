import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/navbar";
import "./css/navbar.css";
import "./css/main.css";
import Home from "./components/home";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import AboutUs from "./components/aboutUs";
import { en, gr } from "./data/translation";
import react, { useState } from "react";

function App() {
  const [enabledLang, setEnabledLang] = useState(en);
  const [disabledLang, setDisabledLang] = useState(gr);
  const appCSS = `App ${enabledLang.lang}`;
  const handleLang = () => {
    enabledLang == en ? setEnabledLang(gr) : setEnabledLang(en);
    disabledLang == gr ? setDisabledLang(en) : setDisabledLang(gr);
  };
  let propsLang = {
    enabledLang: enabledLang,
    disabledLang: disabledLang,
    handleLang: handleLang,
  };
  return (
    <div className={appCSS}>
      <Router>
        <Nav propsLang={propsLang} />
        <Switch>
          <Route path="/" exact>
            <Home propsLang={propsLang} />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs propsLang={propsLang} />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUs propsLang={propsLang} />
          </Route>
          <Route path="/*">
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer propsLang={propsLang} />
      </Router>
    </div>
  );
}

export default App;

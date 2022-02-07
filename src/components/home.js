import React from "react";
import Card from "./card";
import Slider from "./slider";

const Home = (props) => {
  const lang = props.propsLang.enabledLang.main;
  const title = lang.title;
  const paragraph = lang.paragraph;
  const homecards = lang.homePageCards;
  return (
    <div className="home-page">
      <div className="firstPanel">
        <h1>{title}</h1>
      </div>
      <div className="secondPanel">
        <article>
          <h1>{paragraph}</h1>
        </article>
        <section class="card-section">
          {homecards.map((item) => {
            return (
              <>
                <Card icon={item.icon} text={item.text} />
              </>
            );
          })}
        </section>
        <Slider />
      </div>
    </div>
  );
};

export default Home;

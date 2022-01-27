
import React from "react";
import "./About.css";

export const About = ({ hero }) => {
  return (
      <div className="aboutme">
      <h3>Acerca de mi</h3>
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
  );
};
import React from "react";
import "./Experience.css";

export const Experience = ({ experience }) => {
  return (

      <div>
      <h3>Experiencia</h3>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
  );
};
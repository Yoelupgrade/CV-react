import React from "react";
import "./More.css";

export const More = ({ languages,habilities }) => {
  return (
    <div>
      <div className="education card">
        <h3>Idiomas</h3>
        <p>{languages.language}</p>
        <h3>Habilidades</h3>      
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
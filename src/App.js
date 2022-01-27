import { useState } from "react";
import "./App.css";
import {
  Hero,
  Education,
  About,
  Experience,
  More,
} from "./components/index.js";
import { CV } from "./CV/CV";
const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState("education");
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <div className="btn-container">
        <button
          className="custom-btn"
          onClick={() => setShowEducation("education")}
        >
          Educación
        </button>
        <button
          className="custom-btn"
          onClick={() => setShowEducation("experience")}
        >
          Experiencia
        </button>
        <button
          className="custom-btn"
          onClick={() => setShowEducation("abilities")}
        >
          Habilidades
        </button>
      </div>
      <div className="all-container">
        {showEducation === "education" ? (
          <Education education={education} />
        ) : showEducation === "experience" ? (
          <Experience experience={experience} />
        ) : showEducation === "abilities" ? (
          <More languages={languages} habilities={habilities} />
        ) : null}
      </div>
    </div>
  );
}

export default App;

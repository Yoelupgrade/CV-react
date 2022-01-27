import React from 'react'
import "./Hero.css";

export const Hero = ({ hero }) => {
  return (
       <div className="hero">
      <img src={hero.image} alt={hero.image} />
      <div className="card">
      <h2>
        {hero.name} 
      </h2>
      <h3>
      {hero.adress}
      </h3>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>
          yoel.arenas@bootcamp-upgrade.com
          </a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>💾<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  )
}


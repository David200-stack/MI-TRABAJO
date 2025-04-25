// src/components/Home.js
import React from "react";


const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Descubre las mejores Figuras 3D</h1>
        <p>Explora nuestra colección de figuras de acción, fantasía y más.</p>
        <button className="catalog-btn">Ver Catálogo</button>
      </div>
      <div className="featured-section">
        <h2>Figuras Destacadas</h2>
        <div className="figures-grid">
          <div className="figure-card">
            <img src="/path/to/image.jpg" alt="Figura 1" />
            <h3>Figura 1</h3>
          </div>
          <div className="figure-card">
            <img src="/path/to/image2.jpg" alt="Figura 2" />
            <h3>Figura 2</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
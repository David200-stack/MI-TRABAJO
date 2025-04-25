import React, { useState, useEffect } from "react";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products") // Llamada al backend
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Catálogo</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <img src={product.image} alt={product.name} style={{ width: "200px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
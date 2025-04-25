import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#2563eb", color: "white" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>
        Inicio
      </Link>
      <Link to="/catalog" style={{ color: "white", textDecoration: "none" }}>
        Catálogo
      </Link>
    </nav>
  );
};

export default Navbar;
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/login", title: "Login" },
  { to: "/product", title: "Product" }
];

const Navbar = () => {
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center", color: "#5D4037" }}>
        GET RS 50 OFF ON ORDERS ABOVE RS 100
      </h2>
      <hr />
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>CraftsVilla</h1>
        </Link>
        <input type="text" placeholder="Search here for the products" />
        <div className="wrap">
          {links.map((el) => (
            <Link className="list" key={el.to} to={el.to}>
              {el.title}
            </Link>
          ))}
          <Link to="/cart" style={{ textDecoration: "none",color:"white"}} ><ShoppingCartIcon/></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

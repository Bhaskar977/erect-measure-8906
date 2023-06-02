import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.css";
import styled from "@emotion/styled";

const links = [
  { to: "/login", title: "Login" },
  { to: "/product", title: "Product" },
];

const Navbar = () => {
  return (
    <DIV>
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
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
@media (min-width: 0px) and (max-width: 600px) {
  .nav {
    display: flex;
    flex-direction:column;
    text-align:center
  }
  .nav>input{
    width:60%
  }
  .wrap{
    display: flex;
    flex-direction:column;
    text-align:center;
  }
}
 

`

export default Navbar;

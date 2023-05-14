import styled from "@emotion/styled";
import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <DIV>
    <div className="footer">
      <div style={{width:"30%"}}>
        <h3>About Us</h3>
        <p>
          India's most convenient online grocery channel Buyerapp Fresh and
          Smart makes your grocery shopping even simpler. No more hassles of
          sweating it out in crowded markets, grocery shops & supermarkets - now
          shop from the comfort of your home; office, or on the move. We offer
          you the convenience of shopping for everything that you need for your
          home - be it fresh fruits & vegetables, rice, dals, oil, packaged
          food, dairy item, frozen, pet food, household cleaning items &
          personal care products from a single virtual store.
        </p>
        <h3>PAYMENT OPTIONS</h3>
      </div>
      <div>
        <h3>OUR COMPANY</h3>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h3>TOP CATEGORIES</h3>
        <p>Grocery</p>
      </div>
      <div>
        <h3>POLICIES & INFO</h3>
        <p>Privacy Policy</p>
        <br />
        <h3>SUPPORT</h3>
        <p style={{marginRight:"30px"}} >For Help, send an email to care@craftsvilla.com</p>
      </div>
    </div>
    </DIV>
  );
};

const DIV = styled.div`
.footer{
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  background-color: #b0e0e6;
  padding: 20px;
}
.footer
.footer>div p{
  font-family: sans-serif;
}

@media (min-width:0px) and (max-width:600px){
  .footer{
    width:300px;
    display:grid;
    grid-template-columns:repeat(2,1fr)
  }
  .footer>div p{
    width:200px;
  }
}

`


export default Footer;

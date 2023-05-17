import styled from "@emotion/styled";
import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <DIV>
    <div className="footer">
      <div >
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
@media (min-width:0px) and (max-width:600px){
  .footer{
    display:grid;
    grid-template-columns:repeat(2,1fr)
  }
  
}

`


export default Footer;

import React, { useState,useEffect } from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Store from "./Store";
import Footer from "../Components/Footer";
import styled from "@emotion/styled";

const Home = () => {
  
  const [currIndex,setCurrIndex] = useState(0)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  const storeData = [
    {
      image:
        "http://lh3.googleusercontent.com/9ObthFmAMkQ-gkpSgE5D52_wVa7gTGDQNK9aSy5VLW617hjuK_8xvPJLPJGmGCrGcF-od6atsAAYahxEBQGB2UE4JJaN",
      title: "MANISHAS BAKERY 24x7",
      distance: "0.94KM",
    },
    {
      image:
        "http://lh3.googleusercontent.com/mcQJiWzBipp4HtPe2PU5J7ylbwMaEWuNRwZ99vJDdxy_R89qvwzrdZ3CjzVSf4LjpatDmWpkIeJiMKY1ZwadT0vDzfQV",
      title: "PUNJABI GRILL",
      distance: "0.94KM",
    },
    {
      image:
        "http://lh3.googleusercontent.com/P4O79x1nhcCe64dhl6v4HBMPrSuNf-0PGU5nuKYJ2QuDBg6ZpoGw38kv3DZWXfTzxf_KsAt80stKncDCx8oQwi4XgQ",
      title: "DA PIZZA YUM",
      distance: "0.99KM",
    },
    {
      image:
        "https://lh3.googleusercontent.com/wZzuX6nuUmXmbkAa8ccmAdhGxACmo1ys9-MUcop5Gw9MZU-PfU2vprnFt4qOwUz0B5Hsd2km3EfvuxkfFdcYfX4oLdoZAFMQccBEEARz",
      title: "THE GOOD BOWL",
      distance: "1.12KM",
    },
    {
      image: "https://www.uengage.in/images/addo/logos/image-1670933552.jpg",
      title: "SCOOP ZONE RESTAURANT",
      distance: "0.57KM",
    },
    {
      image:
        "https://lh3.googleusercontent.com/oaXVpSfGQNsqx8-_TvrbRaPdgOLdbI52-dZlEzeXqU1c0N-fG3n_iZ23_wvhjSfopSXjkG1OSOMTb_WFNmS2MKApCiCzVcc4-zdTeBV5",
      title: "CHILLI PILLI",
      distance: "0.82KM",
    },
    {
      image:
        "http://lh3.googleusercontent.com/D3YM0j5qwFL6YXNBpS1yOfVCTC_r-NmdrTtZBeIJmXCUKHT9s5yB7-ypmHnjA2ZfxziVtOk91VRczV990acaoCoj5i3QQ5bfpRvW0P4",
      title: "NYC FooDIES",
      distance: "0.93KM",
    },
    {
      image:
        "http://lh3.googleusercontent.com/dnc-pYvp-dz8zyltQhoJ85PUVZtcD_8I1RQKLCI7SrbrEPDrbMXlHzLTdXkaS9pa_ci1YD6wqXipEQAhYyQ_-nWV-Dk",
      title: "BEAR BURGER",
      distance: "1.31KM",
    },
  ];
  const categoryData = [
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285421_OC5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png" },
  ];

  const banner = [
    {
      image:
        "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png",
    },
    {
      image:
        "https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
    },
    {
      image:
        "https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
    },
    { image: "https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png" },
    { image: "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" },
  ];
  
  //setInterval to the Banner
    
  useEffect(() => {
    const intervalId = setInterval(()=>{
      if(currIndex===banner.length-1){
        setCurrIndex(0)
      }
      else{
        setCurrIndex(currIndex+1)
      }
    },2000)
    return () => clearInterval(intervalId)
  }, [currIndex]);

  const data = storeData.map((el) => (
    <Store image={el.image} title={el.title} distance={el.distance} />
  ));
  const cData = categoryData.map((el) => (
    <img width="90%" src={el.image} alt="" />
  ));
  const ban = banner.map((el) =><img src={el.image} alt="ban"/>);
  return (
    <DIV>
      <div style={{ textAlign: "center" }}>
        <h2 className="title">Stores Near Me</h2>
        <div>
          <Carousel responsive={responsive}>{data}</Carousel>
        </div>
        <h2 className="title">Shop By Category</h2>
        <div>
          <Carousel responsive={responsive}>{cData}</Carousel>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Carousel responsive={responsive2}>{ban}</Carousel>
        </div>
        <div className="bottom">
          <img
            src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png"
            alt=""
          />
          <img
            src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png"
            alt=""
          />
          <img
            src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png"
            alt=""
          />
          <img
            src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png"
            alt=""
          />
        </div>
        <Footer />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .title {
    font-size: 35px;
    margin-top: 30px;
    font-family: poppins;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  .title::before {
    content: "";
    height: 1px;
    background-color: gray;
    display: block;
  }
  .title::after {
    content: "";
    height: 1px;
    background-color: gray;
    display: block;
  }

  /* Bottom */

  .bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 20px 10px 10px 10px;
  }
  .bottom > img {
    width: 95%;
    margin: auto;
    border-radius: 10px;
  }

  @media (min-width: 0px) and (max-width: 600px) {
    .bottom {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Home;

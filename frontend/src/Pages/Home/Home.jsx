import React, { useEffect, useRef } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Products from "../Products/Products";
import { ScrollTrigger } from "gsap/all";
import AboutUs from '../../Pages/AboutUs/AboutUs';
import VehiclesDisplay from "../VehiclesDisplay/VehiclesDisplay";
import Usp from "../../Components/Usp/Usp";
import Rentals from "../Rentals/Rentals";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const boxref = useRef();
  
  useEffect(() => {
    gsap.to(".navbar", {
      backgroundColor: "yellow",
      duration: 0.5,
      height: "120px",
      scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
} , [])

  return (
    <div className="home" id="home">
      <Header />
      <Usp />
      <div id="products">
        <Products />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="rentals">
        <Rentals />
      </div>
      <VehiclesDisplay />
    </div>
  );
};

export default Home;

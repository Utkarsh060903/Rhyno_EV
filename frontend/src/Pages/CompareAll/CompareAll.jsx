import React from "react";
import "./CompareAll.css";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CompareAll = () => {
    window.scrollTo(0, 0);
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
  });

  return (
    <>
      <div className="text">
        <h2>PRODUCT COMPARISON</h2>
      </div>
      <div className="compare-all">
        <div className="compare-all-left">
          <img src={assets.blackbike} alt="RhynoEV SE03 Lite" />
          <img src={assets.bluebike} alt="RhynoEV SE03" />
          <img src={assets.goldenbike} alt="RhynoEV SE03 Max" />
        </div>
        <div className="compare-all-right">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>RhynoEV SE03 Lite</th>
                <th>RhynoEV SE03</th>
                <th>RhynoEV SE03 Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Battery</td>
                <td>1.8kWh</td>
                <td>2.7kWh</td>
                <td>2.7kWh</td>
              </tr>
              <tr>
                <td>Battery Features</td>
                <td>Fire-safe advanced LFP</td>
                <td>Fire-safe advanced LFP</td>
                <td>Fire-safe advanced LFP</td>
              </tr>
              <tr>
                <td>Battery Warranty</td>
                <td>3 years</td>
                <td>3 years</td>
                <td>3 years</td>
              </tr>
              <tr>
                <td>Charging Time</td>
                <td>3 hours (12A)</td>
                <td>4 hours (12A)</td>
                <td>4 hours (12A)</td>
              </tr>
              <tr>
                <td>Motor</td>
                <td>1500W</td>
                <td>1500W</td>
                <td>2000W</td>
              </tr>
              <tr>
                <td>Max Speed</td>
                <td>55 km/hr</td>
                <td>55 km/hr</td>
                <td>65 km/hr</td>
              </tr>
              <tr>
                <td>Warranty on Electronics</td>
                <td>1 years</td>
                <td>1 years</td>
                <td>1 years</td>
              </tr>
              <tr>
                <td>Max Range @30km/hr</td>
                <td>100 km</td>
                <td>150 km</td>
                <td>120 km</td>
              </tr>
              <tr>
                <td>Max Range @45km/hr</td>
                <td>90 km</td>
                <td>110 km</td>
                <td>100 km</td>
              </tr>
              <tr>
                <td>Max Range @full speed</td>
                <td>60 km</td>
                <td>90 km</td>
                <td>80 km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CompareAll;

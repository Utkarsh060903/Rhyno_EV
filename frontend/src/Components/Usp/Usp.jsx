import React, { useEffect, useRef } from "react";
import "./Usp.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Usp = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: -200, rotation: -90 , opacity: 0 },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="text">
        <h2>OUR MAIN USPs : </h2>
      </div>
      <div className="usp">
        <div className="card" ref={el => cardRefs.current[0] = el} id="card1">
          <div className="overlayy">
            <h3>LFP Battery</h3>
            <p>
              Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
              renowned for their safety features—eliminating the risk of fire
              associated with other Lithium batteries. These batteries boast a
              broader temperature range, ideal for the diverse Indian climate. Our
              technology enhances Rhyno's longevity, complemented by an Active
              Balancing Smart Battery Management System (BMS) for extended life and
              reduced maintenance. Each battery undergoes rigorous waterproofing
              tests according to IP76 standards. But it doesn't stop there—our
              technology goes the extra mile in ensuring the battery's lasting
              durability. Connect with us to discover the thoughtful engineering
              behind our batteries!
            </p>
          </div>
        </div>
        <div className="card" ref={el => cardRefs.current[1] = el} id='card2'>
          <div className="overlayy">
            <h3>Wider tyres</h3>
            <p>
              Now, say goodbye to skidding and embrace the leaning turns! Featuring
              first-of-its-kind, 9.5-inch wider tyres that make this machine an
              enormous beast that ensures stability on different terrains such as
              wet roads, mud, and sand.
            </p>
          </div>
        </div>
        <div className="card" ref={el => cardRefs.current[2] = el} id="card3">
          <div className="overlayy">
            <h3>Range prediction</h3>
            <p>
              Many budget-friendly electric scooters overlook this crucial feature,
              causing riders to experience range anxiety. With Rhyno, you can ride
              with peace of mind, thanks to the scooter providing precise
              information about the remaining battery.
            </p>
          </div>
        </div>
        <div className="card" ref={el => cardRefs.current[3] = el} id="card4">
          <div className="overlayy">
            <h3>Extraordinery Experience</h3>
            <p>
              Rhyno is more than just a mode of transportation. It is an experience
              of sheer comfort and style! A seamless fusion of minimalism,
              sophistication, and a touch of masculinity!
            </p>
          </div>
        </div>
        <div className="card" ref={el => cardRefs.current[4] = el} id="card5">
          <div className="overlayy">
            <h3>Rugged and simple Design</h3>
            <p>
              We’ve had enough of the EVs looking and feeling like fragile plastic
              toys. Often fading out and shamelessly breaking in minor accidents,
              ending up spending weeks and months at service stations for complex
              repairs. We took a bold step of making something raw, rugged, and
              practical. We kept it so simple that even your trusted local mechanic
              can understand and repair most of it. If you have reached this far,
              why not to take a test ride? Click here to locate your nearest
              dealership or book a test ride at your home!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usp;

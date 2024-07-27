import React, { useState, useEffect, useRef } from "react";
import "./Product2.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { assets } from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const Product2 = () => {
  const [image, setImage] = useState(assets.blackbike);
  const imageRef = useRef();
  const descriptionRef = useRef();
  const detailsRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);

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

    gsap.fromTo(
      descriptionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );

    gsap.fromTo(
      detailsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );
  }, []);

  const handleColorChange = (color) => {
    let newImage;
    switch (color) {
      case "black":
        newImage = assets.blackbike;
        break;
      case "blue":
        newImage = assets.bluebike;
        break;
      case "gold":
        newImage = assets.goldenbike;
        break;
      default:
        newImage = assets.blackbike;
    }
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        onStart: () => setImage(newImage),
      }
    );
  };

  return (
    <div className="product2-page" id="product2">
      <div className="product2-details">
        <div className="left2-side">
          <img
            loading="lazy"
            ref={imageRef}
            src={image}
            alt="Product"
            className="product2-image"
          />
          <div className="color-buttons">
            <button
              onClick={() => handleColorChange("black")}
              className="color-button black"
            ></button>
            <button
              onClick={() => handleColorChange("blue")}
              className="color-button blue"
            ></button>
            <button
              onClick={() => handleColorChange("gold")}
              className="color-button gold"
            ></button>
          </div>
        </div>
        <div className="right2-side">
          <div ref={descriptionRef} className="description2">
            <h1>Rhyno SE03 </h1>
            <p>
              Indulge in the perfect harmony of power and range with this Rhyno.
              Offering an exhilarating experience with its robust 2000W motor,
              it ensures a thrilling ride while still delivering an impressive
              80-100 km range on a single charge. Like its counterparts, this
              machine features the safety assurance of a fire-safe advanced LFP
              battery, along with the comprehensive benefits of owning a Rhino.
              Boasting a formidable combination of a 2000W motor and a 2.7kWh
              battery, this beast is ready to roar on the roads, providing an
              electrifying journey at every turn. Check out the other details
              below!
            </p>
          </div>
          <div ref={detailsRef} className="product2-details-list">
            <h3>Product Details:</h3>
            <ul>
              <li>
                <strong>Max range (@30km/hr):</strong> 150km
              </li>
              <li>
                <strong>Battery:</strong> 2.7kWh
              </li>
              <li>
                <strong>Motor:</strong> 1500W
              </li>
              <li>
                <strong>Charging time:</strong> 4 hours (12A)
              </li>
              <li>
                <strong>Battery warranty:</strong> 3 years
              </li>
              <li>
                <strong>Max speed (@full speed):</strong> 50km/hr
              </li>
              <li>
                <strong>Max range (@45km/hr):</strong> 110km
              </li>
              <li>
                <strong>Other key benefits:</strong>
                Fire-safe battery , Range prediction , Comfortable ride Stable
                and safe
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;

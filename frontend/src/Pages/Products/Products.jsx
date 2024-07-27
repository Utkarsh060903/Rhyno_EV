
import React, { useEffect, useRef } from "react";
import "./Products.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const productRefs = useRef([]);
  const backgroundRef = useRef(null);

  useEffect(() => {
 window.scrollTo(0, 0);
    gsap.fromTo(
      productRefs.current,
      { x: 100, opacity: -1 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".products",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
    <div className="texts">
        <h2>OUR PRODUCTS: </h2>
    </div>
    <div className="products-container" ref={backgroundRef}>
      <div className="products">
        <Link to='/product1' className="product" ref={el => productRefs.current[0] = el} id="product1">
          <div className="overlay">
            <h4>Rhyno SE03 Lite</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
              quae non iusto provident labore. Accusamus saepe numquam est aliquam
              rem expedita inventore, ipsam quaerat vel, temporibus quis
              recusandae, necessitatibus eaque!
            </p>
          </div>
          <img loading="lazy" src={assets.blackbike} alt="Rhyno SE03 Lite Black" />
        </Link>
        <Link to='/product2' className="product" ref={el => productRefs.current[1] = el} id="product2">
          <div className="overlay">
            <h4>Rhyno SE03 </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
              quae non iusto provident labore. Accusamus saepe numquam est aliquam
              rem expedita inventore, ipsam quaerat vel, temporibus quis
              recusandae, necessitatibus eaque!
            </p>
          </div>
          <img loading="lazy" src={assets.bluebike} alt="Rhyno SE03 Lite Blue" />
        </Link>
        <Link to='/product3' className="product" ref={el => productRefs.current[2] = el} id="product3">
          <div className="overlay">
            <h4>Rhyno SE03 Max</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
              quae non iusto provident labore. Accusamus saepe numquam est aliquam
              rem expedita inventore, ipsam quaerat vel, temporibus quis
              recusandae, necessitatibus eaque!
            </p>
          </div>
          <img loading="lazy" src={assets.goldenbike} alt="Rhyno SE03 Lite Golden" />
        </Link>
      </div>
    </div>
    </>
    
  );
};

export default Products;




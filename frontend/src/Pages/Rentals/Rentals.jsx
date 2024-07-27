import React from "react";
import "./Rentals.css";
import { assets } from "../../assets/assets";

const Rentals = () => {
  return (
    <div className="rentals">
      <div className="main-content">
      <h3>RENTALS</h3>
        <p>
          Explore the roars of Rhyno at your own pace with our rental options!
          Test the waters with our flexible rental model, available for a week
          or a month, allowing you to experience the Rhyno first hand before
          committing. Simply visit our authorized dealerships to unlock this
          opportunity. Additionally, we're redefining campus commuting with our
          rental fleet tailored for college students. Navigate your daily
          commute effortlessly by renting Rhyno vehicles on an hourly basis
          through our user-friendly mobile app. Embrace the freedom to ride and
          explore a new dimension in sustainable and convenient transportation.
        </p>
      </div>
      <div className='app-download' id='app-download'>
        <p>Download our rental app <br />RhynoEV App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>

    </div>
  );
};

export default Rentals;

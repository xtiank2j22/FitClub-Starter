import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
// for animation
import { motion } from "framer-motion";

const Hero = () => {
  // for the animation
  const transition = { type: "spring", duration: 3 };
  // for the animation ends
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      {/* light back orange blur  */}
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          {/* for the animation  */}
          <motion.div
            initial={{ left: mobile ? "165" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          {/* // for the animation ends */}
          <span>Your best fitness club in town</span>
        </div>
        {/* Hero heading text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures section */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
             <NumberCounter end={978} start={700} delay='4' preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
             <NumberCounter end={50} start={0} delay='4' preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons down */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* the left side ends here */}
      {/* this is the right hand side of the hero section */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images right hand side */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories section starts here */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

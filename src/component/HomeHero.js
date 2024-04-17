import Link from "next/link";
import React from "react";

const HomeHero = () => {
  return (
    <div className="hero v-center">
      <div className="wrapper v-center jcs h100">
        <div className="hero-content flx60">
          <h1 className="hero-heading fs44 fw6 fc5 lh48 flx100 mb16">
            Unlock Your <span className="fc2">Potential</span>
          </h1>
          <p className="hero-text fw4 fc5 lh24 mb24 pr48">
            Begin a transformative journey in commerce education with expert
            teaching and personalized support. Achieve excellence in
            Accountancy, Economics and Business Studies for school and college
            level. Join us to unlock your full potential in a dynamic learning
            environment.
          </p>
          <div className="dib">
            <Link href="#" className="h40 plr24 bg1 v-center fc5 br8">
              Explore More
            </Link>
          </div>
        </div>
        <div className="hero-img-contain flx1">
          <div className="hero-img box-center">
            <div className="h-img-bg pr ofh h-center aisc zi3">
              <img
                className=" circle-img pr"
                src="images/character-hero-bg.png"
                alt="hero-img"
              />
            </div>
            <div className="h-img-bg-bs pa ofh h-center aisc"></div>
            <div className="h-img-bg1 pa zi1">
              <div className="circle-box"></div>
            </div>
            <div className="h-img-bg2 pa">
              <div className="circle-box2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

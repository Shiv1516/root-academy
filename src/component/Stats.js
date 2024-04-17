import Link from "next/link";
import React from "react";
import { TbPointFilled } from "react-icons/tb";

const Stats = () => {
  return (
    <div className="stats-section ptb48">
      <div class="wrapper row df fww mtb48">
        <div class="col-sm-6 col-lg-5 col-xl-2">
          <div class="element-counter-box layout-1 fc-h5 transit2 ofh aft bef bg5 pr mb40 df fdc aisc">
            <div class="counter-boxes">
              <div class="number ttu mb12 fw7 fs32">
                <span class="counter">17+ </span>Years
              </div>
              <h4 class="title fw4 ttu lh22">Experience</h4>
            </div>
          </div>
          <div class="element-icon-box layout-2 ofh aft bef mb40 df fdc aisc pr">
            <div class="icon-image mb16">
              <img src="/images/statsSection/icon-box-01.png" alt="IMG" />
            </div>
            <div class="content">
              <h3 class="title fc5 fw4 ttu lh22">Quick Support</h3>
            </div>
          </div>
          <div class="element-counter-box layout-1 fc-h5 transit2 ofh aft bef bg5 pr mb40 df fdc aisc">
            <div class="counter-boxes">
              <div class="number ttu mb12 fw7 fs45">
                <span class="counter">15,000</span>+
              </div>
              <h4 class="title fw4 ttu lh22">Students</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-5 col-xl-2">
          <div class="element-icon-box layout-2 ofh aft bef mb40 df fdc aisc pr">
            <div class="icon-image mb16">
              <img src="/images/statsSection/icon-box-02.png" alt="IMG" />
            </div>
            <div class="content">
              <h3 class="title fc5 fw4 ttu lh22">Innovative Learning</h3>
            </div>
          </div>
          <div class="element-counter-box layout-1 fc-h5 transit2 ofh aft bef bg5 pr mb40 df fdc aisc">
            <div class="counter-boxes">
              <div class="number ttu mb12 fw7 fs45">
                <span class="counter">100%</span>
              </div>
              <h4 class="title fw4 ttu lh22">Results-driven</h4>
            </div>
          </div>
          <div class="element-icon-box layout-2 ofh aft bef mb40 df fdc aisc pr">
            <div class="icon-image mb16">
              <img src="/images/statsSection/icon-box-01.png" alt="IMG" />
            </div>
            <div class="content">
              <h3 class="title fc5 fw4 ttu lh22">Secure Future</h3>
            </div>
          </div>
        </div>
        <div class="col-xl-6 flx50">
          <div class="heading mb32">
            <div class="sub-heading bef pr mb12 pl48 fs16 fc2 fw6">
              Teaching Methodology
            </div>
            <div class="main-heading fs36 fw6 mb32">
              Engaging Students Through Interactive Learning
            </div>
            <div className="desc lh24 fc3">
              Our teaching methodology focuses on interactive and engaging
              learning experiences, ensuring effective comprehension of complex
              concepts. Through interactive lectures, real-world case studies,
              group projects, and hands-on activities, we create a dynamic
              learning environment that fosters critical thinking and practical
              application of knowledge.
            </div>
          </div>
          <div class="element-features pt32 pl24">
            <h3 class="title-element fs20 fw6 lh24 mb24">
              Teaching Methodology
            </h3>
            <ul class="list-feature">
              <li class="item-feature mb16  v-center">
                {" "}
                <TbPointFilled className="fc2 fs20 mr8" />
                Interactive Lectures
              </li>
              <li class="item-feature mb16  v-center">
                {" "}
                <TbPointFilled className="fc2 fs20 mr8" />
                Real-World Case Studies
              </li>
              <li class="item-feature mb16  v-center">
                {" "}
                <TbPointFilled className="fc2 fs20 mr8" />
                Group Projects
              </li>
              <li class="item-feature mb16  v-center">
                {" "}
                <TbPointFilled className="fc2 fs20 mr8" />
                Hands-On Activities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

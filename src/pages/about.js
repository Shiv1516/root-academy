import React from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";

function about() {
  return (
    <>
      <section className="breadcrum ptb24">
        <div className="breadcrum-section wrapper v-center">
          <Link href="/">
            <FaHome className="fs20 fc5" />
          </Link>
          <LuChevronRight className="fs18 mlr8 fc5" />
          <h4 className="fs16 fc5">About Us</h4>
        </div>
      </section>

      <section className="intro-about bg4 ptb48">
        <div className="intro-about-section wrapper df fww aisc ptb40">
          <div className="ser-heading v-center mb48">
            <div className="heading flx50">
              <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
                Dreaming Big, Achieving Bigger
              </div>
              <div className="main-heading fs36 fw6">
                Shaping the Future: Our Dreams, Vision, and Mission
              </div>
            </div>
            <div className="desc flx50">
              <p className="fs18 lh24">
                Dreaming big, we envision a world where every learner thrives.
                Our mission is to revolutionize education, empowering minds and
                igniting possibilities for a brighter tomorrow.
              </p>
            </div>
          </div>
          <div className="intro-about-content flx50 df mb24">
            <div className="intro-about-content-box mlr16 bg5 br8">
              <div class="intro-about-heading ptb40 plr40 jcsb df fdc">
                <div className="about-heading-content mb48 pb48">
                  <div class="sub-heading bef pr mb24 pl48 fs16 fc2 fw6">
                    How it Started
                  </div>
                  <div class="main-heading fs42 fw6 mb32 lh48">
                    Our Dream is <br />
                    <span className="fc6 fsi">
                      Global Learning Transformation
                    </span>
                  </div>
                </div>
                <div className="desc lh30 fc3">
                  Our journey began with a dream: to transform global education
                  for a brighter future. Fueled by passion and expertise, we're
                  on a mission to empower students globally, instilling in them
                  the knowledge, skills, and confidence needed for a successful
                  tomorrow. Join us in shaping a brighter world through
                  education!
                </div>
              </div>
            </div>
          </div>
          <div className="intro-about-images flx50 mb24">
            <div className="intro-about-images-box mlr16">
              <div className="inner-about-image df">
                <img
                  src="images/intro-about-img.jpg"
                  className="w100 br8 df"
                  alt="intro-about-img"
                />
              </div>
              <div className="intro-about-images-boxes bg5 df fww br8 mt16 p8">
                <div className="about-images-boxe flx50">
                  <div className="about-images-box-content m12 bg4 plr16 ptb24 br8">
                    <h3 className="about-images-box-heading mb12 fs24 fw6">
                      17+
                    </h3>
                    <p className="about-images-box-text fs14">
                      Year of Experiance
                    </p>
                  </div>
                </div>
                <div className="about-images-boxe flx50">
                  <div className="about-images-box-content m12 bg4 plr16 ptb24 br8">
                    <h3 className="about-images-box-heading mb12 fs24 fw6">
                      15,000+
                    </h3>
                    <p className="about-images-box-text fs14">
                      Trusted Students
                    </p>
                  </div>
                </div>
                <div className="about-images-boxe flx50">
                  <div className="about-images-box-content m12 bg4 plr16 ptb24 br8">
                    <h3 className="about-images-box-heading mb12 fs24 fw6">
                      100%
                    </h3>
                    <p className="about-images-box-text fs14">Results-Driven</p>
                  </div>
                </div>
                <div className="about-images-boxe flx50">
                  <div className="about-images-box-content m12 bg4 plr16 ptb24 br8">
                    <h3 className="about-images-box-heading mb12 fs24 fw6">
                      96%
                    </h3>
                    <p className="about-images-box-text fs14">
                      Positive Review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-vision flx50">
            <div className="intro-vision-box bg5 plr24 ptb32 br8 mlr16">
              <div class="heading">
                <div class="sub-heading bef pr mb12 pl48 fc2 fw6">
                  Our Vision
                </div>
                <div class="main-heading fs32 fw6 mb32">
                  Empowering Lives Through Education
                </div>
                <div className="desc lh24 fc3">
                  Empowering lives through education, we strive to ignite minds,
                  unlock potentials, and foster growth, creating a brighter
                  future for individuals and communities alike.
                </div>
              </div>
            </div>
          </div>
          <div className="intro-mission flx50">
            <div className="intro-mission-box bg5 plr24 ptb32 br8 mlr16">
              <div class="heading">
                <div class="sub-heading bef pr mb12 pl48 fc2 fw6">
                  Our Mission
                </div>
                <div class="main-heading fs32 fw6 mb32">
                  Education Empowering All, Everywhere: Lifelong Learning
                </div>
                <div className="desc lh24 fc3">
                  Empowering everyone through lifelong learning, accessible
                  anywhere, anytime, fostering growth, innovation, and
                  empowerment for individuals and communities globally.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="believe-section ptb48">
        <div className="believe wrapper df fww ptb40">
          <div className="believe-cards flx33">
            <div className="believe-cards mlr12 br4 bg4">
              <img src="images/social\notes.webp" alt="batches" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default about;

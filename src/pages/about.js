import React from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
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

      <section className="believe-section ptb48">
        <div className="believe wrapper df fww ptb40">
          <div className="ser-heading v-center mb48">
            <div className="heading flx50">
              <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
                Proven Track Record
              </div>
              <div className="main-heading fs36 fw6">
                Why People Believe in Us
              </div>
            </div>
            <div className="desc flx50">
              <p className="fs18 lh24">
                With Trusted Excellence, our proven track record speaks volumes,
                showcasing our commitment to reliability, quality, and
                unwavering customer satisfaction.
              </p>
            </div>
          </div>
          <div className="believe-card flx33 df">
            <div className="believe-cards mlr12 br4 brd1 transit2 plr24 ptb32 tac resource2">
              <img src="images/svg-icon\free-icon.svg" alt="batches" />
              <h3 className="fs22 fw6 mb16">We're Free</h3>
              <p className="lh24">
                We spent thousands of hours creating an algorithm that does this
                for you in seconds. We collect a small fee from the professional
                after they meet your.
              </p>
            </div>
          </div>
          <div className="believe-card flx33 df">
            <div className="believe-cards mlr12 br4 brd1 transit2 plr24 ptb32 tac resource2">
              <img src="images/svg-icon\unbiased.svg" alt="unbiased" />
              <h3 className="fs22 fw6 mb16">We're Unbiased</h3>
              <p className="lh24">
                We don't accept ads from anyone, We use actual data to match you
                who the best person for the each job.
              </p>
            </div>
          </div>
          <div className="believe-card flx33 df">
            <div className="believe-cards mlr12 br4 brd1 transit2 plr24 ptb32 tac resource2">
              <img src="images/svg-icon/guide-you.svg" alt="guide" />
              <h3 className="fs22 fw6 mb16">We Guide You</h3>
              <p className="lh24">
                Buying or selling a home is often the largest transaction anyone
                does in their life. We guide you through the process so that you
                can be confident in reaching your dream outcome.
              </p>
            </div>
          </div>
          <div className="believe-btn df jcc w100">
            <div className="believe-btns tac mt32">
              <p className="believe-btn-text fs20 fw6 mb12">
                Still not sure ??
              </p>
              <Link href="#" className="h40 bg2 plr24 br4 box-center fc5 fw6">
                Read Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="knowtutor ptb48 bg4">
        <div className="knowtutor-section wrapper df fww ptb40">
          <div className="knowtutor-content flx50 pr plr16 pt16">
            <div class="heading">
              <div class="sub-heading bef pr mb12 pl48 fs16 fc2 fw6">
                Experience, Expertise, and Commitment
              </div>
              <div class="main-heading fs36 fw6 mb32">
                Meet Our Dedicated Tutors
              </div>
              <div className="desc lh24 fc3 mb24">
                Our tutors embodies a blend of experience, expertise, and
                unwavering commitment to student success. Each tutor is
                carefully selected for their proficiency in their subjects,
                passion for teaching, and ability to inspire learning. Get to
                know the exceptional individuals shaping the minds of tomorrow.
              </div>
              <ul className="knowtutor-point mb24">
                <li className="knowtutor-points v-center mb16">
                  <FaRegCircleDot className="mr8 fc2 fw6" />
                  Expertise in various subjects, diverse knowledge.
                </li>
                <li className="knowtutor-points v-center mb16">
                  <FaRegCircleDot className="mr8 fc2 fw6" />
                  Passionate educators, dedicated to student success.
                </li>
                <li className="knowtutor-points v-center mb16">
                  <FaRegCircleDot className="mr8 fc2 fw6" />
                  Proven track record, successful outcomes guaranteed.
                </li>
                <li className="knowtutor-points v-center mb16">
                  <FaRegCircleDot className="mr8 fc2 fw6" />
                  Personalized teaching, tailored to individual student needs.
                </li>
              </ul>
              <div className="knowtutor-btn-box dib">
                {" "}
                <Link
                  href="#"
                  className="knowtutor-btn h40 plr24 bg1 v-center fc5 br8"
                >
                  View More
                </Link>
              </div>
            </div>
            <div className="knowtutor-quality plr12 ptb12 br4 flx33 bg5 dib pa bs2">
              <MdOutlineHealthAndSafety className="fs28 mb8 fc6" />
              <h4 className="fw6 fc1 mb8">100% Safe & Secured</h4>
              <p className="fs13 lh18">
                Build a Course, build a brand, build a business. Here is what
                Teachable.
              </p>
            </div>
          </div>
          <div className="knowtutor-image flx50">
            <div className="knowtutor-image-box plr48 df ofh">
              <img
                src="images/ameesh-sir.jpg"
                alt="ameesh"
                className="w100 br4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;

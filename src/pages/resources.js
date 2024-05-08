import React from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

const resources = () => {
  return (
    <>
      <section className="breadcrum ptb24">
        <div className="breadcrum-section wrapper v-center">
          <Link href="/">
            <FaHome className="fs20 fc5" />
          </Link>
          <LuChevronRight className="fs18 mlr8 fc5" />
          <h4 className="fs16 fc5">Resources</h4>
        </div>
      </section>

      <section className="resource-intro ptb40">
        <div className="resource-intro-section wrapper ptb40 df fww">
          <div className="resource-intro-section-images flx50 df plr32">
            <img src="images/boys-bg-img.jpg" alt="" className="w100 br4 df" />
          </div>
          <div className="resource-intro-section-content flx50 plr24">
            <div class="heading mb32">
              <div class="sub-heading bef pr mb12 pl48 fs16 fc2 fw6">
                FREE FOR SUBSCRIBERS
              </div>
              <div class="main-heading fs36 fw6 mb32">
                Take the next step towards achieving personal and professional
                goals
              </div>
              <div className="desc lh24 fc3">
                Vivamus sagittis nulla eget tempus dapibus. Duis volutpat neque
                ipsum, eget efficitur justo venenatis eget. Proin sodales cursus
                arcu, ac posuere purus lobortis nec. Maecenas quis est eget
                massa fringilla maximus sit amet vel est. Morbi quis orci nec
                mauris auctor iaculis. Maecenas tristique, purus in laoreet
                ultrices
              </div>
              <div className="timer-box df ptb24">
                <div className="timer-cards df fdc tac">
                  <span className="timer-card-heading fs42 fc6 fw6 mb12">
                    00
                  </span>
                  <span className="timer-card-subtext fw5">days</span>
                </div>
                <div className="timer-cards">
                  <span className="fs42 fc6 fw6 mlr16">:</span>
                </div>
                <div className="timer-cards df fdc tac">
                  <span className="timer-card-heading fs42 fc6 fw6 mb12">
                    00
                  </span>
                  <span className="timer-card-subtext fw5">hours</span>
                </div>
                <div className="timer-cards">
                  <span className="fs42 fc6 fw6 mlr16">:</span>
                </div>
                <div className="timer-cards df fdc tac">
                  <span className="timer-card-heading fs42 fc6 fw6 mb12">
                    00
                  </span>
                  <span className="timer-card-subtext fw5">minutes</span>
                </div>
                <div className="timer-cards">
                  <span className="fs42 fc6 fw6 mlr16">:</span>
                </div>
                <div className="timer-cards df fdc tac">
                  <span className="timer-card-heading fs42 fc6 fw6 mb12">
                    00
                  </span>
                  <span className="timer-card-subtext fw5">seconds</span>
                </div>
              </div>
              <div className="dib">
                <Link
                  href="/con"
                  className="plr24 bg1 h40 fc5 fw6 br4 v-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-videos ptb48 bg4">
        <div className="resource-video-section wrapper df fww aisc ptb40">
          <div className="ser-heading v-center mb48">
            <div className="heading flx50">
              <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
                Stay Engaged, Stay Informed
              </div>
              <div className="main-heading fs36 fw6">
                Social Media Hub for Study Resources
              </div>
            </div>
            <div className="desc flx50">
              <p className="fs18 lh24 ">
                Join our social media community for updates on classes and
                access to study resources. Enhance your learning journey with
                valuable content.
              </p>
            </div>
          </div>
          <div className="resource-video-section-cards flx33 mb12 df">
            <div className="resource-video-section-card mlr12 br4 ofh bg5">
              <img
                src="images/accountancy.jpg"
                alt="accountancy"
                className="w100"
              />
              <div className="video-section-card-content ptb24 plr16">
                <h4 className="card-content-subheading fs14 fc6 fw6 mb16">
                  FREE FOR SUBSCRIBERS
                </h4>
                <h3 className="card-content-heading mb16 fs20 lh24 fw6">
                  Essential Guide: Unlock Accountancy Fundamentals
                </h3>
                <p className="card-content-text lh24 mb24">
                  Explore fundamental accounting principles in our dynamic video
                  series. Master balance sheets, income statements, and cash
                  flow analysis for a robust understanding of accounting
                  essentials.
                </p>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@ameeshsir"
                  className="plr24 bg1 ptb16 dib fc5 fw6 br4"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="resource-video-section-cards flx33 mb12 df">
            <div className="resource-video-section-card mlr12 br4 ofh bg5">
              <img
                src="images/economics.jpg"
                alt="accountancy"
                className="w100"
              />
              <div className="video-section-card-content ptb24 plr16">
                <h4 className="card-content-subheading fs14 fc6 fw6 mb16">
                  FREE FOR SUBSCRIBERS
                </h4>
                <h3 className="card-content-heading mb16 fs20 lh24 fw6">
                  Essential Economics: Explore Principles in Informative
                </h3>
                <p className="card-content-text lh24 mb24">
                  Explore economics through our informative video lectures.
                  Learn key principles like supply and demand, market
                  equilibrium, and consumer choice theory. Start understanding
                  economies now!
                </p>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@ameeshsir"
                  className="plr24 bg1 ptb16 dib fc5 fw6 br4"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="resource-video-section-cards flx33 mb12 df">
            <div className="resource-video-section-card mlr12 br4 ofh bg5">
              <img src="images/business.jpg" alt="business" className="w100" />
              <div className="video-section-card-content ptb24 plr16">
                <h4 className="card-content-subheading fs14 fc6 fw6 mb16">
                  FREE FOR SUBSCRIBERS
                </h4>
                <h3 className="card-content-heading mb16 fs20 lh24 fw6">
                  Comprehensive Business Studies Lectures
                </h3>
                <p className="card-content-text lh24 mb24">
                  Dive into business studies with our comprehensive videos
                  covering foundational concepts to advanced topics. Gain
                  insights to succeed in today's dynamic landscape. Unlock
                  potential now!
                </p>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@ameeshsir"
                  className="plr24 bg1 ptb16 dib fc5 fw6 br4"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-notes pt48">
        <div className="resource-notes-section wrapper df fww ptb40">
          <div className="ser-heading v-center mb48">
            <div className="heading flx50">
              <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
                Your Key to Success
              </div>
              <div className="main-heading fs36 fw6">
                Access Essential Study Aids and Class Notes on Social Media.
              </div>
            </div>
            <div className="desc flx50">
              <p className="fs18 lh24 ">
                Unlock invaluable study resources and class notes on our social
                media platform. Elevate your learning experience and achieve
                academic excellence effortlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="notes-section ptb48 aft pr">
          <ul className="notes-into-sections wrapper df fdc w100 fc5 pt32">
            <li className="notes-cards df jcsb zi3 fww mb24">
              <div className="notes-cards-content flx50">
                <h4 className="subject-name fs22 lh24 fw6 mb12">
                  Download Accountancy Study Materials
                </h4>
                <p className="subject-text lh24 fc7">
                  Get access to detailed notes and resources to excel in your
                  Accountancy studies.
                </p>
              </div>
              <div className="notes-cards-button flx50 df jcc fc2">
                <Link
                  href="#"
                  download="Accountancy"
                  className="download-btn  df jcc aic fw6 fs20"
                >
                  <FaFilePdf className="mr8" /> Download
                </Link>
              </div>
            </li>
            <li className="notes-cards df jcsb zi3 fww mb24">
              <div className="notes-cards-content flx50">
                <h4 className="subject-name fs22 lh24 fw6 mb12">
                  Download Economics Study Materials
                </h4>
                <p className="subject-text lh24 fc7">
                  Explore a range of study materials and resources to deepen
                  your understanding of Economics.
                </p>
              </div>
              <div className="notes-cards-button flx50 df jcc fc2">
                <Link
                  href="#"
                  download="Economics"
                  className="download-btn  df jcc aic fw6 fs20"
                >
                  <FaFilePdf className="mr8" /> Download
                </Link>
              </div>
            </li>
            <li className="notes-cards df jcsb zi3 fww mb24">
              <div className="notes-cards-content flx50">
                <h4 className="subject-name fs22 lh24 fw6 mb12">
                  Download Business Studies Study Materials
                </h4>
                <p className="subject-text lh24 fc7">
                  Enhance your knowledge with downloadable study materials and
                  resources tailored for Business Studies.
                </p>
              </div>
              <div className="notes-cards-button flx50 df jcc fc2">
                <Link
                  href="#"
                  download="Business Studies"
                  className="download-btn  df jcc aic fw6 fs20"
                >
                  <FaFilePdf className="mr8" /> Download
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default resources;

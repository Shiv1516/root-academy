import React from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

const cources = () => {
  return (
    <>
      <section className="breadcrum ptb24">
        <div className="breadcrum-section wrapper v-center">
          <Link href="/">
            <FaHome className="fs20 fc5" />
          </Link>
          <LuChevronRight className="fs18 mlr8 fc5" />
          <h4 className="fs16 fc5">Cources</h4>
        </div>
      </section>

      <section className="cources ptb40">
        <div className="cources-section wrapper ptb40 df fww aisc">
          <div className="ser-heading v-center mb48">
            <div className="heading flx50">
              <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
                Discover a World of Knowledge
              </div>
              <div className="main-heading fs36 fw6">
                Explore Diverse Courses: Forge Your Path to Success.
              </div>
            </div>
            <div className="desc flx50">
              <p className="fs18 lh24">
                Browse through our comprehensive selection of courses designed
                to expand your horizons, enhance your skills, and fuel your
                passion for learning. From Economics to Mathematics, find the
                perfect course to ignite your academic journey.
              </p>
            </div>
          </div>
          <div className="cources-cards flx33 mb32 df">
            <div className="cources-card mlr16 pr bs4 ofh transit2 br4">
              <img src="images/course12.jpg" alt="cources" className="w100" />
              <span className="bg4 bg-h1 cp pa r0 t0 mt12 mr12 br4">
                <CiBookmark className="p4 fc1 fc-h5 fw6" />
              </span>
              <span className="bg1 cp pa l0 t0 ml12 fc5 fw6 fs12 mt12 br2 ptb4 plr8">
                Economics
              </span>
              <div className="cources-card-content ptb16 plr24">
                <div className="cources-detail df jcsb mb16 fs14">
                  <p className="class-name v-center">
                    {" "}
                    <FaBook className="mr8" />
                    Class 12
                  </p>
                  <p className="rating v-center">
                    <FaRegStar className="mr8 cp" /> 4.75(4)
                  </p>
                </div>
                <h3 className="cources-card-heading mb16 fs18 fw6 lh24">
                  Mastering Economics: Theory and Application
                </h3>
                <p className="cources-card-subheading lh24 mb16 fs15">
                  Delve into economic principles, from micro to macro, exploring
                  supply, demand, market structures, and policy implications for
                  real-world understanding and decision-making.
                </p>
                <Link
                  href="contact"
                  className="cources-btn df jce fw5 fc2 v-center mb12 mr12 transit2 tdul-h"
                >
                  Know More
                  <IoArrowForwardOutline className="ml12" />
                </Link>
              </div>
            </div>
          </div>
          <div className="cources-cards flx33 mb32 df">
            <div className="cources-card mlr16 pr bs4 ofh transit2 br4">
              <img src="images/course12.jpg" alt="cources" className="w100" />
              <span className="bg4 bg-h1 cp pa r0 t0 mt12 mr12 br4">
                <CiBookmark className="p4 fc1 fc-h5 fw6" />
              </span>
              <span className="bg1 cp pa l0 t0 ml12 fc5 fw6 fs12 mt12 br2 ptb4 plr8">
                Accountancy
              </span>
              <div className="cources-card-content ptb16 plr24">
                <div className="cources-detail df jcsb mb16 fs14">
                  <p className="class-name v-center">
                    {" "}
                    <FaBook className="mr8" />
                    Class 12
                  </p>
                  <p className="rating v-center">
                    <FaRegStar className="mr8 cp" /> 5.75(4)
                  </p>
                </div>
                <h3 className="cources-card-heading mb16 fs18 fw6 lh24">
                  Mastering Accountancy: Principles and Practice
                </h3>
                <p className="cources-card-subheading lh24 mb16 fs15">
                  Gain expertise in financial reporting, analysis, and
                  management accounting, essential for a successful career in
                  finance and business management.
                </p>
                <Link
                  href="contact"
                  className="cources-btn df jce fw5 fc2 v-center mb12 mr12 transit2 tdul-h"
                >
                  Know More
                  <IoArrowForwardOutline className="ml12" />
                </Link>
              </div>
            </div>
          </div>
          <div className="cources-cards flx33 mb32 df">
            <div className="cources-card mlr16 pr bs4 ofh transit2 br4">
              <img src="images/course12.jpg" alt="cources" className="w100" />
              <span className="bg4 bg-h1 cp pa r0 t0 mt12 mr12 br4">
                <CiBookmark className="p4 fc1 fc-h5 fw6" />
              </span>
              <span className="bg1 cp pa l0 t0 ml12 fc5 fw6 fs12 mt12 br2 ptb4 plr8">
                Business Studies
              </span>
              <div className="cources-card-content ptb16 plr24">
                <div className="cources-detail df jcsb mb16 fs14">
                  <p className="class-name v-center">
                    {" "}
                    <FaBook className="mr8" />
                    Class 12
                  </p>
                  <p className="rating v-center">
                    <FaRegStar className="mr8 cp" /> 4.75(4)
                  </p>
                </div>
                <h3 className="cources-card-heading mb16 fs18 fw6 lh24">
                  Business Studies Mastery: Theory to Application
                </h3>
                <p className="cources-card-subheading lh24 mb16 fs15">
                  Explore the dynamics of commerce, management, and
                  entrepreneurship, preparing you for leadership roles in the
                  corporate world.
                </p>
                <Link
                  href="contact"
                  className="cources-btn df jce fw5 fc2 v-center mb12 mr12 transit2 tdul-h"
                >
                  Know More
                  <IoArrowForwardOutline className="ml12" />
                </Link>
              </div>
            </div>
          </div>
          <div className="cources-cards flx33 mb32 df">
            <div className="cources-card mlr16 pr bs4 ofh transit2 br4">
              <img src="images/course12.jpg" alt="cources" className="w100" />
              <span className="bg4 bg-h1 cp pa r0 t0 mt12 mr12 br4">
                <CiBookmark className="p4 fc1 fc-h5 fw6" />
              </span>
              <span className="bg1 cp pa l0 t0 ml12 fc5 fw6 fs12 mt12 br2 ptb4 plr8">
                Economics
              </span>
              <div className="cources-card-content ptb16 plr24">
                <div className="cources-detail df jcsb mb16 fs14">
                  <p className="class-name v-center">
                    {" "}
                    <FaBook className="mr8" />
                    Class 11
                  </p>
                  <p className="rating v-center">
                    <FaRegStar className="mr8 cp" /> 4.75(4)
                  </p>
                </div>
                <h3 className="cources-card-heading mb16 fs18 fw6 lh24">
                  Economics Mastery: Theoretical Foundations and Practical
                  Applications
                </h3>
                <p className="cources-card-subheading lh24 mb16 fs15">
                  Acquire proficiency in economic theories and their real-world
                  implementations, enhancing your analytical skills and
                  decision-making abilities.
                </p>
                <Link
                  href="contact"
                  className="cources-btn df jce fw5 fc2 v-center mb12 mr12 transit2 tdul-h"
                >
                  Know More
                  <IoArrowForwardOutline className="ml12" />
                </Link>
              </div>
            </div>
          </div>
          <div className="cources-cards flx33 mb32 df">
            <div className="cources-card mlr16 pr bs4 ofh transit2 br4">
              <img src="images/course12.jpg" alt="cources" className="w100" />
              <span className="bg4 bg-h1 cp pa r0 t0 mt12 mr12 br4">
                <CiBookmark className="p4 fc1 fc-h5 fw6" />
              </span>
              <span className="bg1 cp pa l0 t0 ml12 fc5 fw6 fs12 mt12 br2 ptb4 plr8">
                Accountancy
              </span>
              <div className="cources-card-content ptb16 plr24">
                <div className="cources-detail df jcsb mb16 fs14">
                  <p className="class-name v-center">
                    {" "}
                    <FaBook className="mr8" />
                    Class 11
                  </p>
                  <p className="rating v-center">
                    <FaRegStar className="mr8 cp" /> 5.75(4)
                  </p>
                </div>
                <h3 className="cources-card-heading mb16 fs18 fw6 lh24">
                  Accountancy Expertise: Fundamentals and Application
                </h3>
                <p className="cources-card-subheading lh24 mb16 fs15">
                  Attain mastery in accounting principles and their practical
                  application, essential for financial analysis and strategic
                  decision-making.
                </p>
                <Link
                  href="contact"
                  className="cources-btn df jce fw5 fc2 v-center mb12 mr12 transit2 tdul-h"
                >
                  Know More
                  <IoArrowForwardOutline className="ml12" />
                </Link>
              </div>
            </div>
          </div>
          <div className="cources-cards flx33 mb32 df">
            <div className="cources-card mlr16 pr bs4 ofh transit2 br4">
              <img src="images/course12.jpg" alt="cources" className="w100" />
              <span className="bg4 bg-h1 cp pa r0 t0 mt12 mr12 br4">
                <CiBookmark className="p4 fc1 fc-h5 fw6" />
              </span>
              <span className="bg1 cp pa l0 t0 ml12 fc5 fw6 fs12 mt12 br2 ptb4 plr8">
                Business Studies
              </span>
              <div className="cources-card-content ptb16 plr24">
                <div className="cources-detail df jcsb mb16 fs14">
                  <p className="class-name v-center">
                    {" "}
                    <FaBook className="mr8" />
                    Class 11
                  </p>
                  <p className="rating v-center">
                    <FaRegStar className="mr8 cp" /> 4.75(4)
                  </p>
                </div>
                <h3 className="cources-card-heading mb16 fs18 fw6 lh24">
                  Business Studies Proficiency: Bridging Theory and Practice
                </h3>
                <p className="cources-card-subheading lh24 mb16 fs15">
                  Develop expertise in business concepts, seamlessly integrating
                  theoretical knowledge with real-world applications for
                  comprehensive understanding and skill acquisition.
                </p>
                <Link
                  href="contact"
                  className="cources-btn df jce fw5 fc2 v-center mb12 mr12 transit2 tdul-h"
                >
                  Know More
                  <IoArrowForwardOutline className="ml12" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default cources;

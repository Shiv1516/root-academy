import React from "react";
import { FaBook } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Courses = () => {
  return (
    <section className="courses ptb48 mtb48 bg4">
      <div className="courses-container wrapper">
        <div className="courses-heading aic df fdc">
          <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
            Courses Offered
          </div>
          <div className="main-heading fs36 fw6 mb32">
            Discover Comprehensive Commerce Curriculum Here
          </div>
        </div>
        <div className="courses-card-box df fww">
          <div className="course-card flx33 mb24">
            <div className="course-cards mr24 p12 bg5">
              <div className="course-img mb24 ofh">
                <img
                  src="images/social/courses.jpg"
                  alt="courses"
                  className="w100 df transit2 br4"
                />
              </div>
              <div className="course-content">
                <div className="course-description df jcsb mb16 fs15 fw5">
                  <div className="v-center">
                    <FaBook className="mr8 fc6 fs16" /> 4 Lessons
                  </div>
                  <div className="v-center mr8">
                    <IoTimeOutline className="mr8 fc6 fs16" /> 5 hours 35
                    minutes
                  </div>
                </div>
                <h2 className="course-content-heading fs20 lh30 fw6 mb16">
                  Statistics Data Scince and Business Analysis
                </h2>
                <p className="course-mode fc2 fw5 pb24 brd-b1">Free</p>
                <div>
                  <div className="course-teacher df jcsb ptb8">
                    <div className="teacher-img v-center">
                      <img
                        src="images/testimonials/client-01.webp"
                        alt="client"
                        className="w100"
                      />
                      <h3 className="fs14 fw6 pl12">Mohan Lal</h3>
                    </div>
                    <div className="course-rating v-center">
                      <span className="v-center mr8">
                        <FaStar className="mlr4 fc2" />
                        <FaStar className="mlr4 fc2" />
                        <FaStar className="mlr4 fc2" />
                        <FaStar className="mlr4 fc2" />
                        <FaStar className="mlr4 fc2" />
                      </span>{" "}
                      5.00(1)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <section className="breadcrum ptb24 bg4">
        <div className="breadcrum-section wrapper v-center">
          <Link href="/">
            <FaHome className="fs20 fc5" />
          </Link>
          <LuChevronRight className="fs18 mlr8 fc5" />
          <h4 className="fs16 fc5">Contact Us</h4>
        </div>
      </section>
      <section className="contact-us ptb48 bg5">
        <div className="contact-us-section wrapper df fww ptb40 aic">
          <div className="contact-us-content flx50">
            <div class="heading mb32 plr40 ptb32">
              <div class="sub-heading bef pr mb12 pl48 fs16 fc2 fw6">
                Customized Academic Tutoring
              </div>
              <div class="main-heading fs36 fw6 mb32">
                Transforming Education, Unlocking Potential
              </div>
              <div className="desc lh24 fc3">
                Discover the power of tailored tutoring services that unlock
                your child's full potential. Our personalized approach ensures
                academic excellence, offering solutions customized to your
                child's unique learning needs. Contact us today for inquiries,
                appointments, or to discuss how we can help your child succeed
                in their educational journey.
              </div>
            </div>
          </div>
          <div className="form-section flx50">
            <form className="contact-forms p32 br4 bg4" action="">
              <h2 className="form-name fs32 fw6 mb32 tac">Contact Us Form</h2>
              <div className="name-fild mb24">
                <input
                  className="h48 plr12 w100 br4"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="name-fild mb24">
                <input
                  className="h48 plr12 w100 br4"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="num-fild mb24">
                <input
                  className="h48 plr12 w100 br4"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="email-fild mb24">
                <input
                  className="h48 plr12 w100 br4"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="msg-fild mb24">
                <textarea
                  className="plr12 pt12 w100 br4"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="contact-cta dib">
                <Link href="#" className="h48 plr48 bg1 v-center fc5 br8">
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-page-section pb48 bg4">
        <div className="wrapper df fww aisc">
          <div className="contact-add-side flx50 pr plr48 df">
            <div className="contact-continer bs4 bg5">
              <div className="contact-heading mb48">
                <h3 className="heading fs32 mb24 lh42 fw6">
                  Tailored tutoring for your
                  <span className="fc2 fsi ml12">Students's potential!</span>
                </h3>
                <p className="decs lh24">
                  -: We offer tutoring services in Gaur City 2. For inquiries or
                  appointments, reach us via phone, WhatsApp, or the contact
                  number provided. Unlock your Students's potential today!
                </p>
              </div>
              <ul className="contact-container">
                <li className="call mb16 v-center">
                  <IoMdCall className="fs20 mr8" /> +91 9315878785
                </li>
                <li className="mail mb16 v-center">
                  <IoMdMail className="fs20 mr8" />
                  info@rootcom.in
                </li>
                <li className="website mb16 v-center">
                  <FaGlobeAmericas className="fs20 mr8" />
                  https://rootcom.in
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-map-side flx50 plr48">
            <div className="map pt48">
              <iframe
                className="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.41072808604!2d77.41498025584313!3d28.619190110749006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4abb9de49b%3A0x287a032bd7ff51f1!2sGaur%20City%202%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1714411685288!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;

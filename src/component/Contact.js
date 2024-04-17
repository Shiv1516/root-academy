import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-section wrapper pt48 pr z1">
      <div className="heading tac mb48">
        <h3 className="fs36 fw6 lh36">Contact Us</h3>
      </div>
      <div className="form-sec bg4 ptb32 br8 bs1">
        <div className="tac">
          <h3 className="sub-heading fs24 lh36 mb32 fw5 plr8">
            Contact for Course Info & Enrollment Help!
          </h3>
        </div>
        <div className="df fww">
          <form className="contact-form flx40 plr32" action="">
            <div className="name-fild mb24">
              <input
                className="h48 plr12 w100 br4"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="num-fild mb24">
              <input
                className="h48 plr12 w100 br4"
                type="number"
                placeholder="Number"
              />
            </div>
            <div className="email-fild mb24">
              <input
                className="h48 plr12 w100 br4"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="class-fild mb24">
              <input
                className="h48 plr12 w100 br4"
                type="number"
                placeholder="class"
              />
            </div>
            <div className="Subject-fild mb24">
              <select
                className="h48 plr12 w100 br4"
                type="text"
                placeholder="Subject"
              >
                <option>-- Select--</option>
                <option>Accountancy</option>
                <option>Economics</option>
                <option>Business Studies</option>
              </select>
            </div>
            <div className="msg-fild mb24">
              <textarea
                className="plr12 pt12 w100 br4"
                rows="4"
                placeholder="Massage"
              ></textarea>
            </div>
            <div className="contact-cta dib">
              <Link href="#" className="h48 plr48 bg1 v-center fc5 br8">
                Submit
              </Link>
            </div>
          </form>
          <div className="add flx1 plr32">
            <div className="address mb32 df">
              <FaLocationDot className="location-icon fs22 mr8" />
              <div>
                <h3 className="fs20 mb12 fw6">Address</h3>
                <p className="mb12 fc8 lh22">
                  Gaur City 2 || Greater Noida || Utter Pradesh
                </p>
              </div>
            </div>
            <div className="call-us mb32 df">
              <FaPhoneVolume className="call-icon fs22 mr8" />
              <div>
                <h3 className="fs20 mb12 fw6">Call Us</h3>
                <p className="mb12 fc8 lh22">+91 9315878785</p>
              </div>
            </div>
            <div className="mail-us mb32 df">
              <IoMail className="mail-icon fs22 mr8" />
              <div>
                <h3 className="fs20 mb12 fw6">Email Us</h3>
                <p className="mb12 fc8 lh22">info@rootcom.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

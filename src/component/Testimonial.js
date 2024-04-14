import React from "react";
import { MdFormatQuote } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className="testimonial-section wrapper df ptb48 jcc">
      <div className="testimonial-card p16 bs1 br8 tac w60">
        <div className="testimonial-img ofh mb16 ">
          <img
            className="br50"
            src="images/testimonials/client-01.webp"
            alt="testimonial-img"
          />
        </div>
        <div className="testimonial-detail flx1 tac v-center fdc plr24 pr">
          <h3 className="testimonial-name fs18 fw6 mb8">Sarah Johnson</h3>
          <p className="testimonial-job mb24 fc4">
            High School Student, Class 12
          </p>
          {/* <MdFormatQuote className="quot-icon fs36 fc2 mb16"/> */}
          <p className="testimonial-desc fc4 lh22 mb16 ">
            I am incredibly grateful for the guidance and support I received.
            Their teaching style is engaging, and they always go the extra mile
            to ensure every student understands complex concepts. Thanks to
            their classes, I not only improved my grades but also developed a
            deeper understanding of commerce principles that will benefit me in
            the future. I highly recommend [Teacher's Name] to anyone looking to
            excel in commerce education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

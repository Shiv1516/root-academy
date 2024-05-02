import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-section wrapper ptb48 ">
      <div className="ser-heading v-center mb48">
        <div className="heading flx50">
          <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
            Proven Track Record
          </div>
          <div className="main-heading fs36 fw6">Why People Believe in Us</div>
        </div>
        <div className="desc flx50">
          <p className="fs18 lh24">
            With Trusted Excellence, our proven track record speaks volumes,
            showcasing our commitment to reliability, quality, and unwavering
            customer satisfaction.
          </p>
        </div>
      </div>
      <Slider {...settings} className="testimonial-cards">
        <div className="testimonial-cards-box df jcc mtb40 ">
          <div className="testimonial-card p16 bs1 br8 tac ptb40 mlr12">
            <div className="testimonial-img ofh mb16 df jcc">
              <img
                className="br50"
                src="images/testimonials/client-01.webp"
                alt="testimonial-img"
              />
            </div>
            <div className="testimonial-detail flx1 tac v-center fdc plr24 pr">
              <h3 className="testimonial-name fs20 fw6 mb8">Neeraj Malhotra</h3>
              <p className="testimonial-job mb24 fs15 fc4">
                Intermediate Student, Class 12
              </p>
              <p className="testimonial-desc fc4 lh22 fs15 taj">
                I am incredibly grateful for the guidance and support I
                received. Their teaching style is engaging, and they always go
                the extra mile to ensure every student understands complex
                concepts. Thanks to their classes, I not only improved my grades
                but also developed a deeper understanding of commerce principles
                that will benefit me in the future. I highly recommend{" "}
                <b>Ameesh Sir</b> to anyone looking to excel in commerce
                education.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-cards-box df jcc mtb40">
          <div className="testimonial-card p16 bs1 br8 tac ptb40 mlr12">
            <div className="testimonial-img ofh mb16 df jcc">
              <img
                className="br50"
                src="images/testimonials/client-01.webp"
                alt="testimonial-img"
              />
            </div>
            <div className="testimonial-detail flx1 tac v-center fdc plr24 pr">
              <h3 className="testimonial-name fs20 fw6 mb8">Neeraj Malhotra</h3>
              <p className="testimonial-job mb24 fs15 fc4">
                Intermediate Student, Class 12
              </p>
              <p className="testimonial-desc fc4 lh22 fs15 taj">
                I am incredibly grateful for the guidance and support I
                received. Their teaching style is engaging, and they always go
                the extra mile to ensure every student understands complex
                concepts. Thanks to their classes, I not only improved my grades
                but also developed a deeper understanding of commerce principles
                that will benefit me in the future. I highly recommend{" "}
                <b>Ameesh Sir</b> to anyone looking to excel in commerce
                education.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-cards-box df jcc mtb40">
          <div className="testimonial-card p16 bs1 br8 tac ptb40 mlr12">
            <div className="testimonial-img ofh mb16 df jcc">
              <img
                className="br50"
                src="images/testimonials/client-01.webp"
                alt="testimonial-img"
              />
            </div>
            <div className="testimonial-detail flx1 tac v-center fdc plr24 pr">
              <h3 className="testimonial-name fs20 fw6 mb8">Neeraj Malhotra</h3>
              <p className="testimonial-job mb24 fs15 fc4">
                Intermediate Student, Class 12
              </p>
              <p className="testimonial-desc fc4 lh22 fs15 taj">
                I am incredibly grateful for the guidance and support I
                received. Their teaching style is engaging, and they always go
                the extra mile to ensure every student understands complex
                concepts. Thanks to their classes, I not only improved my grades
                but also developed a deeper understanding of commerce principles
                that will benefit me in the future. I highly recommend{" "}
                <b>Ameesh Sir</b> to anyone looking to excel in commerce
                education.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-cards-box df jcc mtb40">
          <div className="testimonial-card p16 bs1 br8 tac ptb40 mlr12">
            <div className="testimonial-img ofh mb16 df jcc">
              <img
                className="br50"
                src="images/testimonials/client-01.webp"
                alt="testimonial-img"
              />
            </div>
            <div className="testimonial-detail flx1 tac v-center fdc plr24 pr">
              <h3 className="testimonial-name fs20 fw6 mb8">Neeraj Malhotra</h3>
              <p className="testimonial-job mb24 fs15 fc4">
                Intermediate Student, Class 12
              </p>
              <p className="testimonial-desc fc4 lh22 fs15 taj">
                I am incredibly grateful for the guidance and support I
                received. Their teaching style is engaging, and they always go
                the extra mile to ensure every student understands complex
                concepts. Thanks to their classes, I not only improved my grades
                but also developed a deeper understanding of commerce principles
                that will benefit me in the future. I highly recommend{" "}
                <b>Ameesh Sir</b> to anyone looking to excel in commerce
                education.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-cards-box df jcc mtb40">
          <div className="testimonial-card p16 bs1 br8 tac ptb40 mlr12">
            <div className="testimonial-img ofh mb16 df jcc">
              <img
                className="br50"
                src="images/testimonials/client-01.webp"
                alt="testimonial-img"
              />
            </div>
            <div className="testimonial-detail flx1 tac v-center fdc plr24 pr">
              <h3 className="testimonial-name fs20 fw6 mb8">Neeraj Malhotra</h3>
              <p className="testimonial-job mb24 fs15 fc4">
                Intermediate Student, Class 12
              </p>
              <p className="testimonial-desc fc4 lh22 fs15 taj">
                I am incredibly grateful for the guidance and support I
                received. Their teaching style is engaging, and they always go
                the extra mile to ensure every student understands complex
                concepts. Thanks to their classes, I not only improved my grades
                but also developed a deeper understanding of commerce principles
                that will benefit me in the future. I highly recommend{" "}
                <b>Ameesh Sir</b> to anyone looking to excel in commerce
                education.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;

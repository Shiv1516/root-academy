import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Manan",
      job: "Intermediate Student, Class 12",
      description:
        "  I am incredibly grateful for the invaluable guidance and unwavering support I received. Their teaching style is not only engaging but also highly effective in ensuring a thorough understanding of complex concepts. Thanks to their classes, I witnessed a remarkable improvement in my grades and acquired a profound understanding of commerce principles that will undoubtedly shape my future. I wholeheartedly recommend <b>Ameesh Sir</b> to anyone looking to excel in commerce education.",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Shreya",
      job: "Intermediate Student, Class 12",
      description:
        " I am immensely grateful for the invaluable guidance and unwavering support received. Their teaching style is not only engaging but also incredibly effective in ensuring a deep understanding of complex concepts. Thanks to their classes, my grades improved significantly, and I gained a comprehensive understanding of commerce principles that will undoubtedly benefit me in the future. I highly recommend <b>Ameesh Sir</b> to anyone seeking success in commerce education.",
      image: "images/testimonials/client-02.webp",
    },
    {
      name: "Harsh",
      job: "College Student",
      description:
        " I am deeply appreciative of the invaluable guidance and steadfast support I received. Their teaching methodology is not only engaging but also goes above and beyond to ensure a thorough understanding of complex concepts. Thanks to their classes, I not only witnessed a substantial improvement in my grades but also gained a profound insight into commerce principles that will undoubtedly shape my future endeavors. I highly recommend <b>Ameesh Sir</b> to anyone seeking excellence in commerce education.",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Himanshi",
      job: "Intermediate Student, Class 11",
      description:
        " I am profoundly thankful for the incredible guidance and unwavering support I received. Their teaching style is not only engaging but also goes the extra mile to ensure that every student comprehends complex concepts effectively. Thanks to their classes, I not only saw a significant improvement in my grades but also developed a deeper understanding of commerce principles that will greatly benefit me in the future. I wholeheartedly recommend <b>Ameesh Sir</b> to anyone looking to excel in commerce education.",
      image: "images/testimonials/client-02.webp",
    },
    {
      name: "Shardul",
      job: "Intermediate Student, Class 11",
      description:
        " I am deeply grateful for the exceptional guidance and support I received. Their teaching approach is both engaging and thorough, ensuring that every student grasps complex concepts effectively. Thanks to their classes, not only did my grades improve, but I also gained a deeper understanding of fundamental commerce principles that will be invaluable to me in the future. I highly recommend <b>Ameesh Sir</b> to anyone aiming for success in commerce education.",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Inkita",
      job: "Intermediate Student, Class 11",
      description:
        "I am immensely thankful for the invaluable guidance and unwavering support provided. The teaching methodology is not only engaging but also goes above and beyond to ensure comprehensive understanding of intricate concepts. As a result of these classes, my academic performance saw a significant improvement, and I gained a profound insight into commerce principles that will undoubtedly aid me in the future. I wholeheartedly endorse <b>Ameesh Sir</b> for anyone seeking excellence in commerce education.",
      image: "images/testimonials/client-02.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="ser-heading v-center mb48 ptb40">
        <div className="heading flx50">
          <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
            Achievements, Growth, and Determination
          </div>
          <div className="main-heading fs36 fw6">
            Inspiring Stories of Successful Students
          </div>
        </div>
        <div className="desc flx50">
          <p className="fs18 lh24">
            Discover inspiring stories of successful students, highlighting
            achievements, personal growth, and determination to succeed. These
            narratives illustrate education's transformative impact and the
            power of perseverance.
          </p>
        </div>
      </div>
      <Slider {...settings} className="testimonial-cards">
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="testimonial-cards-box df jcc mtb40 ">
            <div className="testimonial-card p16 bs1 br8 tac ptb40 mlr12">
              <div className="testimonial-img ofh mb16 df jcc">
                <img
                  className="br50"
                  src={testimonial.image}
                  alt="testimonial-img"
                />
              </div>
              <div className="testimonial-detail flx1 tac v-center fdc plr24 pr">
                <h3 className="testimonial-name fs20 fw6 mb8">
                  {testimonial.name}
                </h3>
                <p className="testimonial-job mb24 fs14 fc4">
                  {testimonial.job}
                </p>
                <p
                  className="testimonial-desc fc4 lh22 fs15 "
                  dangerouslySetInnerHTML={{ __html: testimonial.description }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;

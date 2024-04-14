import Link from "next/link";
import React from "react";

const servicesData = [
  {
    id: "1",
    title: "Accountancy",
    image: "images/social/service-icon.webp",
  },
  {
    id: "2",
    title: "Economics",
    image: "images/social/service-icon-02.webp",
  },
  {
    id: "3",
    title: "Business Studies",
    image: "images/social/service-icon-01.webp",
  },
];

const Services = () => {
  return (
    <section className="service-section bg5">
      <div className="ser-section wrapper ptb48 mt48">
        <div className="ser-heading v-center mb48">
          <div className="heading flx50">
            <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
              Courses Offered
            </div>
            <div className="main-heading fs36 fw6">
              Explore Our Comprehensive Curriculum
            </div>
          </div>
          <div className="desc flx50">
            <p className="fs18 lh24 ">
              Dive into our vast curriculum, meticulously designed to equip
              students with essential knowledge and skills for academic and
              professional success.
            </p>
          </div>
        </div>
        <div className="cards df fww">
          {servicesData.map((service) => (
            <div className="card-contain plr12 flx33 mb32" key={service.id}>
              <div className="ser-card brd-b2 bs1 pr aft df">
                <div className="ser-holder ptb16 plr24 h-center fdc flx1 zi3">
                  <h3 className="ser-title fs22 fw6 lh28 mb24 w80">
                    {service.title}
                  </h3>
                  <div className="df mb16 fc3 fww">
                    <p className="ser-desc brd1 ptb12 plr16 mr16 mb16 br24 mb12 cp">
                      Class 11
                    </p>
                    <p className="ser-desc brd1 ptb12 plr16 mr16 mb16 br24 mb12 cp">
                      Class 12
                    </p>
                    <p className="ser-desc brd1 ptb12 plr16 mr16 mb16 br24 mb12 cp">
                      Dropper
                    </p>
                  </div>
                  <div className="dib ptb24">
                    <Link
                      href="#"
                      className="ser-card-cta lh18 transit2 brd-b3 cp"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
                <div className="ser-icon flx25 resource2 aic df">
                  <img src={service.image} alt="" className="w100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

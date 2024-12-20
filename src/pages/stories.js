import React from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import Testimonial from "@/component/Testimonial";
import ParentTestimonial from "@/component/ParentTestimonial";

const stories = () => {
  return (
    <>
      <section className="breadcrum ptb24">
        <div className="breadcrum-section wrapper v-center">
          <Link href="/">
            <FaHome className="fs20 fc5" />
          </Link>
          <LuChevronRight className="fs18 mlr8 fc5" />
          <h4 className="fs16 fc5">Stories</h4>
        </div>
      </section>

      <Testimonial />

      <section className="stories ptb40  aft pr">
        <div className="stories-section wrapper df jcc w100 ptb40">
          <div className="zi3 tac df fdc aic w60">
            <h2 className="stories-heading zi3 fc5 fs36 lh42 fw6 mb24">
              Discover Limitless Opportunities for Your Child Here
            </h2>
            <Link
              href="/contact"
              className="stories-btn ptb16 plr24 bg-h2 fc-h5 transit2 zi3 fc5 brd1 dib br4"
            >
              Contact US
            </Link>
          </div>
        </div>
      </section>

      <ParentTestimonial />
    </>
  );
};

export default stories;

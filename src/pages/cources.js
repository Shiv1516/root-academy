import React from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
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
    </>
  );
};

export default cources;

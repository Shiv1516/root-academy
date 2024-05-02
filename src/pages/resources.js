import React from "react";
import { FaHome } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";

const resources = () => {
  return (
    <>
      <section className="breadcrum ptb24">
        <div className="breadcrum-section wrapper v-center">
          <Link href="/">
            <FaHome className="fs20 fc5" />
          </Link>
          <LuChevronRight className="fs18 mlr8 fc5" />
          <h4 className="fs16 fc5">Resources</h4>
        </div>
      </section>

      <section className="ptb40">
        <div className="wrapper ptb40">
          <h2 className="fs20 fw6">Data will be Updated soon</h2>
        </div>
      </section>
    </>
  );
};

export default resources;

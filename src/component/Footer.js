import Link from "next/link";
import React from "react";
import { LuChevronRight } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-top footer-bg brd-b1 ptb48 fc5">
        <div className="wrapper df fww">
          <div className="footer-list flx40 pr16">
            {/* <img
              className="footer-logo"
              src="images/logo-dark.webp"
              alt="footer-logo"
            /> */}
            <h2 className="fs28 fw6 fsi">
              RootCom
              <br /> <span className="fc2">Academy</span>
            </h2>
            <p className="mt24 fw4 lh24 taj">
              Discover comprehensive commerce courses, engage with our dynamic
              teaching methods, and empower your learning journey with expert
              guidance. Contact us for enrollment and academic support.
              <Link href="#" className="fc2 ml4">
                Read More...
              </Link>
            </p>
          </div>
          <div className="links df flx1 fww">
            <div className="footer-list pl32 flx50">
              <h4 className="footer-list-title fc5 pb12 ttu fs20 fw5 pr aft">
                Classes
              </h4>
              <ul className="footer-links mt24 lh24 dib">
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Accountancy (class-12)
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Accountancy (class-11)
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Economics (class-12)
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Economics (class-11)
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Business Studies (class-12)
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Business Studies (class-11)
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-list pl32 flx50">
              <h4 className="footer-list-title fc5 pb12 ttu fs20 fw5 pr aft">
                Important Links
              </h4>
              <ul className="footer-links mt24 lh24 dib">
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    About Us
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Course
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Stories
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Resources
                  </Link>
                </li>
                <li className="sub-list mb12 v-center fc-h1 transit2 cp">
                  <LuChevronRight className="fs18" />
                  <Link className="footer-sub-item" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom bg4">
        <div className="footer-bottom-section wrapper pb4 ptb16 v-center jcsb">
          <div className="copyright">
            <p className="fc3 fw4 fs12 v-center">
              Copyright © 2024{" "}
              <Link href="#" className="fc-h1 transit2 plr4 fw6">
                RootCom Academy
              </Link>{" "}
              || All Rights Reserved.
            </p>
          </div>
          <div className="footer-social">
            <ul className="footer-social-list v-center jcc">
              <li className="fsl mlr12">
                <Link href="#" className="fsl-link transit2 fb">
                  <FaFacebook className="fs20" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link href="#" className="fsl-link transit2 twitter">
                  <FaTwitter className="fs20" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link href="#" className="fsl-link transit2 linkedin">
                  <FaLinkedin className="fs20" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link href="#" className="fsl-link transit2 instagram">
                  <FaInstagram className="fs20" />
                </Link>
              </li>
              <li className="fsl ml12">
                <Link href="#" className="fsl-link transit2 youtube">
                  <FaYoutube className="fs20" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

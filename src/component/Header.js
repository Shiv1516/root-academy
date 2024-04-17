import React, { useState } from "react";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setNavbarOpen(!isNavbarOpen);

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open-nav", !isNavbarOpen);
  };
  return (
    <>
      <div className="top-header bg4">
        <div className="top-header-container wrapper ptb12 jce df">
          <Link href="tel:/+91 9315878785" className="v-center fs15 mr24 fw5">
            {" "}
            <IoMdCall className="mr8 fs22" />
            +91 9315878785
          </Link>
          <Link
            href="mailto:rootcomacademy@gmail.com"
            className="v-center fs15 mr24 fw5"
          >
            {" "}
            <MdMail className="mr8 fs22" />
            rootcomacademy@gmail.com
          </Link>
        </div>
      </div>
      <header className="header">
        <div className="wrapper v-center jcsb h80">
          <Link href="/" className="logo box-center ptb8">
            <h2 className="logo-txt fs32 fw7">
              RootCom
              <span className=" ml8">Academy</span>
            </h2>
            {/* <img src="images/logo-dark.webp" alt="National-logo" /> */}
          </Link>
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <nav className="navbar jce v-center zi999">
            <ul id="nav-items" className="nav-items fc1 v-center fw5 fww">
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link nav-active fc-h1 ptb32 plr16 ls1 transit2"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link fc-h1 ptb32 plr16 ls1 transit2 v-center"
                >
                  Course
                </Link>
                <ul className="nav-sub-items pa t100 l0 bg5 ofh bs3 bbr8 dn">
                  <li className="nav-sub-item">
                    <Link
                      href="atm-withdrawal.html"
                      className="wsnw plr24 ptb16 w100 fw4 fc1 fc-h5 bg-h1 transit2"
                    >
                      Accountancy
                    </Link>
                  </li>
                  <li className="nav-sub-item">
                    <Link
                      href="mobile-recharge.html"
                      className="wsnw plr24 ptb16 w100 fw4 fc1 fc-h5 bg-h1 transit2"
                    >
                      Economics
                    </Link>
                  </li>
                  <li className="nav-sub-item">
                    <Link
                      href="money-transfer.html"
                      className="wsnw plr24 ptb16 w100 fw4 fc1 fc-h5 bg-h1 transit2"
                    >
                      Business Studies
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link fc-h1 ptb32 plr16 ls1 transit2"
                >
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link fc-h1 ptb32 plr16 ls1 transit2"
                >
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link fc-h1 ptb32 plr16 ls1 transit2"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <Link
                href="#"
                className="talk-btn h40 plr24 bg1 v-center fc5 br8"
              >
                Let's Talk
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

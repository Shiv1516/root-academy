import React from "react";

const About = () => {
  return (
    <section className="about-us ptb48">
      <div className="about-section ptb48 wrapper df fww plr48">
        <div className="about-image flx50 plr48 pr df">
          <img
            src="images/ameesh-sir.jpg"
            alt="single-image"
            className="w100 df ofc"
          />
          <div className="experiance fw5 bg6 fc5 dib tac ptb32 plr24 br2 pa">
            <h2 className="experiance-heading fs32 mb8"> 16+</h2>
            <p className="fw4 fs18">Years of</p>
            <p className="fw4 fs18">Teaching</p>
            <p className="fw4 fs18">Experties</p>
          </div>
          <div className="teached fw5 bg6 fc5 dib tac ptb32 plr24 br2 pa">
            <h2 className="teached-heading fs32 mb8"> 2500+</h2>
            <p className="fw4 fs18">Students</p>
            <p className="fw4 fs18">Taught</p>
            <p className="fw4 fs18">&nbsp;</p>
          </div>
        </div>
        <div className="about-content flx1 plr48">
          <h2 className="about-heading fs32 lh36 mb24">
            Hi Dear,
            <br /> <span className="fc2">My name is Ameesh</span>
          </h2>
          <div className="sub-heading bef pr mb24 dib pl48 fs16 fc2 fw6 ttu"></div>
          <p className="about-subcontent lh30 mb24">
            Every company claims to have the best tutors or the best curriculum,
            but the real measure of those things comes down to just one thing:
            their average SAT score increase. In test preparation there is a
            rigorous third-party measuring stick: you have a PSAT score and an
            SAT score If you don’t score higher on your exam, we’ll refund your
            tuition.
          </p>
          <p className="about-subcontent lh24 mb24">
            At StudyPoint we're proud to talk about our results: on the SAT our
            students increase an average of 124 points, while our ACT students
            increase an average.
          </p>
          <img src="images/sign-03.png" alt="" className="mtb24" />
          <h3 className="teacher-name fs20 fw5 mb8 lh24">
            Ameesh Sir <br />
            <span className="fw4 fs15 ml24">(PGT, M.Com, B.Ed)</span>
          </h3>
          <h4 className="teacher-degig"> Founder of RootCom Academy</h4>
        </div>
      </div>
    </section>
  );
};

export default About;

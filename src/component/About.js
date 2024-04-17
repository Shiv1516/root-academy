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
            <h2 className="experiance-heading fs32 mb8"> 17+</h2>
            <p className="fw4 fs18">Years of</p>
            <p className="fw4 fs18">Teaching</p>
            <p className="fw4 fs18">Experties</p>
          </div>
          <div className="teached fw5 bg6 fc5 dib tac ptb32 plr24 br2 pa">
            <h2 className="teached-heading fs32 mb8"> 15,000+</h2>
            <p className="fw4 fs18">Students</p>
            <p className="fw4 fs18">Taught</p>
            <p className="fw4 fs18">&nbsp;</p>
          </div>
        </div>
        <div className="about-content flx1 plr48">
          <h2 className="about-heading fs32 lh36 mb24">
            Hello,
            <br /> <span className="fc2">I am Ameesh Srivastava</span>
          </h2>
          <div className="sub-heading bef pr mb24 dib pl48 fs16 fc2 fw6 ttu"></div>
          <p className="about-subcontent lh30 mb24">
            Your dedicated guide on this educational journey. As your teacher,
            it is my passion and privilege to empower you with the knowledge and
            skills you need to excel in your exams and beyond. With a commitment
            to fostering a dynamic learning environment and personalized
            support, I am here to inspire, challenge, and guide you every step
            of the way.
          </p>
          <p className="about-subcontent lh24 mb24">
            Together, let's embark on a rewarding academic adventure where
            curiosity thrives, and success becomes inevitable. Welcome to our
            classroom!
          </p>
          {/* <img src="images/sign-03.png" alt="" className="mtb24" /> */}
          <h3 className="teacher-name fs20 fw5 mb8 lh24">
            Ameesh Sir <br />
            <span className="fw4 fs14">(M.Com, B.Ed, PGT)</span>
          </h3>
          <h4 className="teacher-degig"> Founder of RootCom Academy</h4>
        </div>
      </div>
    </section>
  );
};

export default About;

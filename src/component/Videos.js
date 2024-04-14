import React from "react";
import Link from "next/link";

const Videos = () => {
  return (
    <section className="videoes ptb48 mtb48 bg4">
      <div className="videos-section wrapper">
        <div className="ser-heading v-center mb48">
          <div className="heading flx50">
            <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
              Video Lessons
            </div>
            <div className="main-heading fs36 fw6">
              Engaging Visual Learning Experience
            </div>
          </div>
          <div className="desc flx50">
            <p className="fs18 lh24 ">
              Dive into our video lessons for a dynamic and immersive learning
              experience, covering key topics and concepts in an engaging
              format.
            </p>
          </div>
        </div>
        <div className="video-cards-box df fww">
          <div className="video flx33 mb24">
            <div className="video-section mlr12">
              <iframe
                className="video-box br16 transit2"
                src="https://www.youtube.com/embed/cLvb0S7HJ50?si=2gfTSV4aOPLvbJcE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="teacher-img  p16 df">
                <img
                  src="images/ameesh-sir.jpg"
                  alt="client"
                  className="w100"
                />
                <div className="video-tag-line pl16">
                  <h2 className="video-line fw6 lh24 mb12">
                    Fund Based Accounting | Not for Profit Organisation (NPO) |
                    class 12 | Accounts | Part-3
                  </h2>
                  <p className="channel-name fs15 fw5">Ameesh Sir</p>
                </div>
              </div>
            </div>
          </div>
          <div className="video flx33 mb24">
            <div className="video-section mlr12">
              <iframe
                className="video-box br16 transit2"
                src="https://www.youtube.com/embed/3piZzkNr3DY?si=Un8iCI7pXgLabNot"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="teacher-img  p16 df">
                <img
                  src="images/ameesh-sir.jpg"
                  alt="client"
                  className="w100"
                />
                <div className="video-tag-line pl16">
                  <h2 className="video-line fw6 lh24 mb12">
                    Change in Profit Sharing Ratio - Partnership | Accounts |
                    Class 12 | Part 1
                  </h2>
                  <p className="channel-name fs15 fw5">Ameesh Sir</p>
                </div>
              </div>
            </div>
          </div>
          <div className="video flx33 mb24">
            <div className="video-section mlr12">
              <iframe
                className="video-box br16 transit2"
                src="https://www.youtube.com/embed/Ax-3jj3xaDA?si=cyJMshyeBGmcN6ak"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="teacher-img  p16 df">
                <img
                  src="images/ameesh-sir.jpg"
                  alt="client"
                  className="w100"
                />
                <div className="video-tag-line pl16">
                  <h2 className="video-line fw6 lh24 mb12">
                    Rules of Debit and Credit | Accounts | Class 11 | Part-1
                  </h2>
                  <p className="channel-name fs15 fw5">Ameesh Sir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mtb32 dib h-center">
          <Link
            target="_blank"
            href="https://www.youtube.com/@ameeshsir"
            className="h40 plr24 bg1 df aic fc5 br8"
          >
            View Channel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Videos;

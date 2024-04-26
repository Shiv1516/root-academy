import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Resource = () => {
  return (
    <section className="resource ptb48 mtb48">
      <div className="resource-setion wrapper">
        <div className="ser-heading v-center mb48">
          <div className="heading flx50">
            <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
              Study Resources
            </div>
            <div className="main-heading fs36 fw6">
              Diverse learning materials enriching your journey.
            </div>
          </div>
          <div className="desc flx50">
            <p className="fs18 lh24 ">
              Access a diverse range of learning materials tailored to enrich
              and support your educational journey, ensuring a comprehensive and
              engaging learning experience.
            </p>
          </div>
        </div>
        <div className="resources-cards-container df fww">
          <div className="resource-card flx33 cp mb24">
            <div className="resource-cards mr24 plr16 ptb24 br4 ofh bs1-h1 resource1">
              <div className="df jcsb">
                <Link href="#" className="resource-heading fs20 fw6 mb12">
                  Notes
                </Link>
                <FaArrowRightLong className="arrow-icon transit2 mr24" />
              </div>
              <p className="resource-subtext lh24 fs14 fw5 mb12">
                Access detailed study materials by Ameesh Sir, simplifying
                complex ideas into easily understandable language for an
                enhanced learning experience.
              </p>
              <div className="resource-img transit2">
                <img src="images/social/notes.webp" alt="notes" />
              </div>
            </div>
          </div>
          <div className="resource-card flx33 cp mb24 df">
            <div className="resource-cards mr24 plr16 ptb24 bg4 br4 ofh bs1-h1 resource2">
              <div className="df jcsb">
                <Link href="#" className="resource-heading fs20 fw6 mb12">
                  Reference Books
                </Link>
                <FaArrowRightLong className="arrow-icon transit2 mr24" />
              </div>
              <p className="resource-subtext lh24 fs14 fw5 mb12">
                Our experts craft thorough study materials, simplifying complex
                concepts into easily understandable content for an enhanced
                learning experience.
              </p>
              <div className="resource-img transit2">
                <img src="images/social/book.webp" alt="notes" />
              </div>
            </div>
          </div>
          <div className="resource-card flx33 cp mb24">
            <div className="resource-cards mr24 plr16 ptb24 bg4 br4 ofh bs1-h1 resource3">
              <div className="df jcsb">
                <Link href="#" className="resource-heading fs20 fw6 mb12">
                  Video Resources
                </Link>
                <FaArrowRightLong className="arrow-icon transit2 mr24" />
              </div>
              <p className="resource-subtext lh24 fs14 fw5 mb16">
                Access a wealth of educational videos covering key topics,
                designed to enhance your understanding and enrich your learning
                experience.
              </p>
              <div className="resource-img transit2">
                <img
                  src="images/social/videos.webp"
                  alt="notes"
                  className="resource-img transit2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resource;

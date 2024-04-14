import React from "react";

const Feature = () => {
  return (
    <section class="features-section">
      <div class="wrapper">
        <div class="features-container v-center jcsb fww bg2 zi99 pr ptb32 br8">
          <div class="feature flx25 plr16 tac">
            <div className="feature-icon">
              <img
                src="/images/svg-icon/demo-class-icon.svg"
                alt="feature-icon"
              />
            </div>
            <div className="heading">
              <h3 class="feature-heading fs20 lh24 fc5 fw6">
                Free Demo
                <br /> calsses
              </h3>
            </div>
          </div>
          <div class="feature flx25 plr16 tac">
            <div className="feature-icon">
              <img
                src="/images/svg-icon/demo-class-icon.svg"
                alt="feature-icon"
              />
            </div>
            <div className="heading">
              <h3 class="feature-heading fs20 lh24 fc5 fw6">
                Regular tast
                <br /> & Assignments
              </h3>
            </div>
          </div>
          <div class="feature flx25 plr16 tac">
            <div className="feature-icon">
              <img src="/images/svg-icon/batches.svg" alt="feature-icon" />
            </div>
            <div className="heading">
              <h3 class="feature-heading fs20 lh24 fc5 fw6">
                Small
                <br /> batches
              </h3>
            </div>
          </div>
          <div class="feature flx25 plr16 tac">
            <div className="feature-icon">
              <img src="/images/svg-icon/batches.svg" alt="feature-icon" />
            </div>
            <div className="heading">
              <h3 class="feature-heading fs20 lh24 fc5 fw6">
                Doubt Clearing
                <br /> Session
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

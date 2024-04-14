import React, { useState, useEffect } from "react";

const data = {
  achievements: [
    {
      name: "Yash",
      subjects: [
        {
          subject: "Accountancy",
          score: 99,
        },
        {
          subject: "Economics",
          score: 96,
        },
      ],
      image: "images/achivement-img/yash.png",
    },
    {
      name: "Harsh",
      subjects: [
        {
          subject: "Accountancy",
          score: 95,
        },
        {
          subject: "Economics",
          score: 95,
        },
      ],
      image: "images/achivement-img/harsh.png",
    },
    {
      name: "Sanjana",
      subjects: [
        {
          subject: "Accountancy",
          score: 95,
        },
        {
          subject: "Economics",
          score: 95,
        },
      ],
      image: "images/achivement-img/sanjana.png",
    },
    {
      name: "Manan",
      subjects: [
        {
          subject: "Accountancy",
          score: 91,
        },
        {
          subject: "Economics",
          score: 95,
        },
      ],
      image: "images/achivement-img/manan.png",
    },
    {
      name: "Inkita",
      subjects: [
        {
          subject: "Accountancy",
          score: 90,
        },
        {
          subject: "Economics",
          score: 89,
        },
      ],
      image: "images/achivement-img/inkita.png",
    },
    {
      name: "Shardul",
      subjects: [
        {
          subject: "Economics",
          score: 97,
        },
      ],
      image: "images/achivement-img/shardul.png",
    },
    {
      name: "Himanshi",
      subjects: [
        {
          subject: "Economics",
          score: 99,
        },
        {
          subject: "Accountancy",
          score: 83,
        },
      ],
      image: "images/achivement-img/himanshi.png",
    },
    {
      name: "Shreya",
      subjects: [
        {
          subject: "Economics",
          score: 91,
        },
        {
          subject: "Accountancy",
          score: 85,
        },
      ],
      image: "images/achivement-img/shreya.png",
    },
    {
      name: "Aryan",
      subjects: [
        {
          subject: "Economics",
          score: 90,
        },
      ],
      image: "images/achivement-img/aryan.png",
    },
    {
      name: "Naina",
      subjects: [
        {
          subject: "Accountancy",
          score: 89,
        },
      ],
      image: "images/achivement-img/naina.png",
    },
  ],
};

function Achievement() {
  const [achievementsData, setAchievementsData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API or JSON file
    setTimeout(() => {
      setAchievementsData(data.achievements);
    }, 1000); // Delay for demonstration purposes
  }, []);

  if (!achievementsData) return <div>Loading...</div>;

  return (
    <section className="achievement ptb48 bg4">
      <div className="achievement-section wrapper mtb48 df fww">
        <div className="ser-heading v-center mb48">
          <div className="heading flx50">
            <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6 ttu">
              Celebrating Excellence
            </div>
            <div className="main-heading fs36 fw6">
              Meet Our Top Achievers in Academics
            </div>
          </div>
          <div className="desc flx50">
            <p className="fs18 lh24 ">
              Discover our top achievers! Meet high-scoring students who embody
              dedication and excellence in their academic journey. Be inspired
              by their success stories
            </p>
          </div>
        </div>
        {achievementsData.map((achievement, index) => (
          <div className="achievement-cards flx20 mb32">
            <div
              key={index}
              className="achievement-card transit2 mlr16 ofh br8"
            >
              <div className="achievement-img ofh">
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  className="w100 transit2 df"
                />
              </div>
              <div className="ptb12 tac">
                <h2 className="achievement-card-heading fs20 fw6 mb8">
                  {achievement.name}
                </h2>
                {achievement.subjects.map((subject, subIndex) => (
                  <p key={subIndex} className="fs14 lh22">
                    {subject.subject} {subject.score}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievement;

import React, { useEffect, useRef } from "react";
import { IoAddOutline } from "react-icons/io5";

// Define your JSON data here
const faqData = [
  {
    index: 1,
    question:
      "What courses do you offer for 11th and 12th-grade commerce students?",
    answer:
      "We offer comprehensive courses covering key subjects such as accountancy, economics, business studies, and more for both 11th and 12th-grade commerce students.",
  },
  {
    index: 2,
    question: "What teaching methods do you use to enhance student learning?",
    answer:
      "We employ a blend of interactive lectures, real-world case studies, group discussions, and hands-on activities to ensure a dynamic learning experience that engages and inspires students.",
  },
  {
    index: 3,
    question: "How can I access study materials and resources for my courses?",
    answer:
      "Upon enrollment, students gain access to a range of study materials including lecture notes, presentations, recommended textbooks, and supplementary resources through our online learning platform.",
  },
  {
    index: 4,
    question:
      "Do you provide individualized support for students who may need extra help?",
    answer:
      "Yes, we offer personalized support to students through one-on-one consultations, tutoring sessions, and additional resources to help them succeed and overcome any challenges they may face.",
  },
  {
    index: 5,
    question: "Are there any prerequisites for enrolling in your courses?",
    answer:
      "While some courses may have recommended prerequisites, we welcome students from diverse backgrounds and tailor our teaching approach to accommodate varying levels of prior knowledge and experience.",
  },
  {
    index: 6,
    question:
      "Can parents get involved or stay updated with their child's progress?",
    answer:
      "Absolutely, we encourage parental involvement and provide regular updates on student progress, performance assessments, and opportunities for parent-teacher interactions to ensure a collaborative learning environment.",
  },
  {
    index: 7,
    question: "What sets your commerce education apart from other programs?",
    answer:
      "Our program stands out for its emphasis on practical application, critical thinking skills, and industry-relevant insights, preparing students not just for exams but also for real-world success in commerce-related fields.",
  },
  // Add more data items as needed
];

const Faq = () => {
  useEffect(() => {
    const questions = document.querySelectorAll(".faq-ques");
    const answers = document.querySelectorAll(".faq-ans");

    questions[0].classList.add("active");
    answers[0].classList.add("active");

    questions.forEach((question, index) => {
      question.addEventListener("click", () => {
        questions.forEach((question) => {
          question.classList.remove("active");
        });
        question.classList.add("active");
        answers.forEach((answer) => {
          if (answer.previousElementSibling === question) {
            answer.classList.add("active");
          } else {
            answer.classList.remove("active");
          }
        });
      });
    });
  }, []);

  return (
    <div className="faq-section">
      <div className="wrapper ptb48">
        <div className="heading mb32">
          <div className="sub-heading bef pr mb12 pl48 fs16 fc2 fw6">FAQs</div>
          <div className="main-heading fs36 fw6">Any Queries</div>
        </div>
        <div className="faq-container df">
          <div class="industry-blocks flx60">
            {faqData.map((item) => (
              <div
                key={item.index}
                class="industry-block ff2 df fdc w100 p16 bg5 bs1 br8 mb16"
              >
                <div class="faq-ques v-center jcsb w100 cp fc-h1">
                  <p class="fs18 fw5 ls1 transit2">{item.question}</p>
                  <IoAddOutline class="faq-colleps fs26 transit2" />
                </div>
                <div class="faq-ans">
                  <p class="lh22 pt16">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="img-side flx40">
            <div className="faq-img plr24">
              <img className="w100 " src="images/faq-img2.png" alt="faq-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

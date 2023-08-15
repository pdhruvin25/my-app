import React from "react";
import "./about.css";
import ME from "../../me_new.png";
import { FaAward } from "react-icons/fa";
import {BsFillRocketTakeoffFill} from  "react-icons/bs";
import {MdArticle} from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years of Project Making</small>
            </article>

            <article className="about_card">
              <BsFillRocketTakeoffFill className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

            <article className="about_card">
              <MdArticle className="about__icon" />
              <h5>Recent Blogs</h5>
              <small>A World Where AI Meets Medicine</small>
              <a href = "https://www.racetoacure.org/post/artificial-intelligence-the-future-of-medicine?gclid=Cj0KCQjwoeemBhCfARIsADR2QCs3RBY5LUM8cq7hwwwNOyqmoFUK5_kAgNLTHS63LrLKstWF628F0KsaAvLrEALw_wcB">Blog</a>
            </article>
          </div>
          <p>
            I am a Software Developer with a passion for creating and developing web applications. I have a strong interest in learning new technologies and frameworks. I am a quick learner and a team player. I have a strong background in JavaScript, React, Node, Express, MongoDB, and Python. I am currently looking for an internship/Coop position as a Software Developer.
          </p>
          <a href = "#contact" className = "btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

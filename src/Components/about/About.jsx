import React from "react";
import "./about.css";
import ME from "../../NewPhoto.jpg";
import { FaAward } from "react-icons/fa";
import {BsFillRocketTakeoffFill} from  "react-icons/bs";
import {MdArticle} from "react-icons/md";

const About = () => {
  return (
    <section id="about">
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
              <h5>Focus Area</h5>
              <small>Full-Stack Engineering</small>
            </article>
          </div>
          <p>
            I am a Software Developer with a passion for creating and developing web applications. I have previously completed two rewarding internships as a Full-Stack Software Developer Intern at SOTI and a Software Developer Intern at Ontario Health, where I built scalable cloud infrastructure, optimized data pipelines, and developed secure authentication systems. I am currently seeking full-time Software Engineering positions.
          </p>
          <a href = "#contact" className = "btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

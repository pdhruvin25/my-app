import React from "react";
import "./experience.css";

import { BsCheck2Circle } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
    <h5>What Skills Do I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Front-End Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsCheck2Circle className = "experience__details-icon" />
            <div >
              <h4>HTML5</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div >
              <h4>JavaScript</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div >
              <h4>React</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div className="experience__info">
              <h4>Python</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div >
              <h4>Java</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div >
              <h4>Solidity</h4>
              <small className="text-light">Learning</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Back-End Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div>
              <h4>Python</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div>
              <h4>Node.js</h4>
              <small className="text-light">Learning</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div >
              <h4>SQL</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div>
              <h4>Java</h4>
              <small className="text-light">Expert</small>
            </div>
          </article>
          <article className="experience__details">
          <BsCheck2Circle className = "experience__details-icon" />
            <div >
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Experience;

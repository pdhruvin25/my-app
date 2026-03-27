import React from 'react';
import './education.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Education = () => {
  return (
    <section id="education">
      <h5>Where I Studied</h5>
      <h2>Education</h2>
      <div className="container education__container">
        <article className="education__card">
          <div className="education__head">
            <h3>University of Toronto</h3>
            <p className="education__date">Sep 2021 – Sep 2026 | Toronto, Canada</p>
            <p className="education__degree">Bachelor of Computer Science: Specialization in Software Engineering</p>
          </div>
          <ul className="education__list">
            <li>
              <BsPatchCheckFill className="education__list-icon" />
              <p><b>Relevant Coursework:</b> Computer & Network Security, Database Systems, Software Systems, Software Design and Architecture, Object-Oriented Analysis and Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;

import React from "react";
import "./experience.css";

import { BsCheck2Circle } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__category">
          <h3>Languages</h3>
          <div className="experience__content">
            {['Python', 'Java', 'C', 'C++', 'C#', 'PHP', 'Javascript', 'Typescript'].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsCheck2Circle className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__category">
          <h3>Frameworks</h3>
          <div className="experience__content">
            {['.NET Core', 'React.js', 'Node.js', 'Express.js', 'Angular', 'Docker', 'PostgreSQL', 'MSSQL', 'MongoDB', 'Jenkins', 'Pandas', 'NumPy', 'Scikit-learn'].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsCheck2Circle className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__category">
          <h3>Developer Tools</h3>
          <div className="experience__content">
            {['Android Studio', 'Matlab', 'Git', 'Jira', 'Linux/Unix', 'Tableau', 'AWS', 'Azure', 'CI/CD'].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsCheck2Circle className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

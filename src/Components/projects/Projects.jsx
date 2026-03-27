import React from 'react';
import './projects.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container projects__container">
        <article className="project">
          <div className="project__head">
            <h3>SecurAid | Secure File Sharing Platform</h3>
            <p className="project__date">Sep 2024 – Dec 2024</p>
            <p className="project__tech">React.js, Node.js, MongoDB, AWS S3, Docker, VirusTotal API, OAuth2</p>
          </div>
          <ul className="project__list">
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Utilized Node.js, Express.js, and MongoDB to manage complex user, file, and project relationships with secure login (bcrypt), Google OAuth2 authentication, OTP authentication and time-restricted access.</p>
            </li>
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Containerized frontend and backend apps with Docker, using Nginx reverse proxy for HTTPS traffic routing, and deploying live via Dynamic DNS (Dynu) to maximize cost-efficiency.</p>
            </li>
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Integrated VirusTotal API for automatic vulnerability scanning on file uploads; built custom parsers to transform raw API data into actionable, user-friendly dashboards.</p>
            </li>
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Developed secure file sharing infrastructure by generating AWS S3 signed URLs and enforcing OTP access control.</p>
            </li>
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Implemented fully dynamic UI for project, file, and dashboard components with 100% mobile optimization.</p>
            </li>
          </ul>
        </article>

        <article className="project">
          <div className="project__head">
            <h3>CoBuild | AI-Powered Recruiting Tool</h3>
            <p className="project__date">Apr 2023 – Aug 2023</p>
            <p className="project__tech">Javascript, MongoDB, ReactJS, NodeJS, ExpressJS, Python, REST API</p>
          </div>
          <ul className="project__list">
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Achieved 40% reduction in the average times for assessment completion and networking by designing and implementing frontend using React.js, resulting in faster hiring timelines.</p>
            </li>
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Accelerated recruiter decision making speed by 30% through the development of a comprehensive analysis system using OpenAI for providing detailed insights into users' assessment solutions.</p>
            </li>
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Optimized data retrieval speeds by 25% by migrating user assessment data to a MongoDB NoSQL structure.</p>
            </li>
            <li>
              <BsPatchCheckFill className="project__list-icon" />
              <p>Reduced API response time to &lt;50ms by optimizing RESTful endpoints in Node.js and Express, enabling realtime processing of coding assessments.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Projects;

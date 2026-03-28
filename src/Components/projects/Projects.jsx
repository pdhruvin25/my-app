import React, { useState } from 'react';
import './projects.css';
import { BsPatchCheckFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const projectData = [
  {
    title: "SecurAid | Secure File Sharing Platform",
    date: "Sep 2024 – Dec 2024",
    tech: "React.js, Node.js, MongoDB, AWS S3, Docker, VirusTotal API, OAuth2",
    bullets: [
      "Utilized Node.js, Express.js, and MongoDB to manage complex user, file, and project relationships with secure login (bcrypt), Google OAuth2 authentication, OTP authentication and time-restricted access.",
      "Containerized frontend and backend apps with Docker, using Nginx reverse proxy for HTTPS traffic routing, and deploying live via Dynamic DNS (Dynu) to maximize cost-efficiency.",
      "Integrated VirusTotal API for automatic vulnerability scanning on file uploads; built custom parsers to transform raw API data into actionable, user-friendly dashboards.",
      "Developed secure file sharing infrastructure by generating AWS S3 signed URLs and enforcing OTP access control.",
      "Implemented fully dynamic UI for project, file, and dashboard components with 100% mobile optimization."
    ]
  },
  {
    title: "CoBuild | AI-Powered Recruiting Tool",
    date: "Apr 2023 – Aug 2023",
    tech: "Javascript, MongoDB, ReactJS, NodeJS, ExpressJS, Python, REST API",
    bullets: [
      "Achieved 40% reduction in the average times for assessment completion and networking by designing and implementing frontend using React.js, resulting in faster hiring timelines.",
      "Accelerated recruiter decision making speed by 30% through the development of a comprehensive analysis system using OpenAI for providing detailed insights into users' assessment solutions.",
      "Optimized data retrieval speeds by 25% by migrating user assessment data to a MongoDB NoSQL structure.",
      "Reduced API response time to <50ms by optimizing RESTful endpoints in Node.js and Express, enabling realtime processing of coding assessments."
    ]
  },
  {
    title: "StockZ | Real-time Market Analyzer",
    date: "",
    tech: "React.js, Node.js, Express.js, TypeScript, Finnhub API",
    bullets: [
      "Architected a highly responsive web-based financial application offering low-latency, real-time insights into thousands of volatile stock market tickers.",
      "Utilized interactive data-visualization libraries to chart market trends seamlessly, significantly enhancing user decision-making processes.",
      "Engineered highly optimized frontend components and robust REST API endpoints to guarantee frictionless data syncing across the full application."
    ]
  },
  {
    title: "Arxiv Retriever | Open Source LLM Contribution",
    date: "",
    tech: "Python, LangChain, OpenAI, arXiv API, PyPDF2",
    bullets: [
      "Contributed deeply to the open-source community by orchestrating a dedicated retriever integration between the LangChain.js framework and the arXiv academic database.",
      "Implemented sophisticated document-parsing logic capable of pulling full dynamic PDFs or extracting lightweight metadata summaries based on custom natural language queries or specific article IDs.",
      "Architected extensive utility functions and robust filtering parameters directly into the retrieval sequence, guaranteeing seamless academic research workflows for AI-driven applications."
    ]
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const displayedProjects = projectData.slice(currentPage * 2, currentPage * 2 + 2);

  return (
    <section id="projects">
      <h2>Projects</h2>
      
      <div className="container projects__container">
        {displayedProjects.map((project, index) => (
          <article className="project" key={index}>
            <div className="project__head">
              <h3>{project.title}</h3>
              {project.date && <p className="project__date">{project.date}</p>}
              <p className="project__tech">{project.tech}</p>
            </div>
            <ul className="project__list">
              {project.bullets.map((bullet, i) => (
                <li key={i}>
                  <BsPatchCheckFill className="project__list-icon" />
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="carousel__navigation">
        <button 
          className="btn btn-primary carousel__btn" 
          onClick={prevPage} 
          disabled={currentPage === 0}
          style={{ visibility: currentPage === 0 ? 'hidden' : 'visible' }}
        >
          <BsChevronLeft />
        </button>
        <button 
          className="btn btn-primary carousel__btn" 
          onClick={nextPage} 
          disabled={(currentPage + 1) * 2 >= projectData.length}
          style={{ visibility: (currentPage + 1) * 2 >= projectData.length ? 'hidden' : 'visible' }}
        >
          <BsChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;

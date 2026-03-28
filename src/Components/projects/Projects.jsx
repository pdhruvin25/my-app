import React from 'react';
import './projects.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const projectsData = [
  {
    title: 'SecurAid | Secure File Sharing Platform',
    date: 'Sep 2024 – Dec 2024',
    tech: 'React.js, Node.js, MongoDB, AWS S3, Docker, VirusTotal API, OAuth2',
    bullets: [
      "Utilized Node.js, Express.js, and MongoDB to manage complex user, file, and project relationships with secure login (bcrypt), Google OAuth2 authentication, OTP authentication and time-restricted access.",
      "Containerized frontend and backend apps with Docker, using Nginx reverse proxy for HTTPS traffic routing, and deploying live via Dynamic DNS (Dynu) to maximize cost-efficiency.",
      "Integrated VirusTotal API for automatic vulnerability scanning on file uploads; built custom parsers to transform raw API data into actionable, user-friendly dashboards.",
      "Developed secure file sharing infrastructure by generating AWS S3 signed URLs and enforcing OTP access control.",
      "Implemented fully dynamic UI for project, file, and dashboard components with 100% mobile optimization."
    ]
  },
  {
    title: 'CoBuild | AI-Powered Recruiting Tool',
    date: 'Apr 2023 – Aug 2023',
    tech: 'Javascript, MongoDB, ReactJS, NodeJS, ExpressJS, Python, REST API',
    bullets: [
      "Achieved 40% reduction in the average times for assessment completion and networking by designing and implementing frontend using React.js, resulting in faster hiring timelines.",
      "Accelerated recruiter decision making speed by 30% through the development of a comprehensive analysis system using OpenAI for providing detailed insights into users' assessment solutions.",
      "Optimized data retrieval speeds by 25% by migrating user assessment data to a MongoDB NoSQL structure.",
      "Reduced API response time to <50ms by optimizing RESTful endpoints in Node.js and Express, enabling realtime processing of coding assessments."
    ]
  },
  {
    title: 'StockZ | Real-Time Stock Analyzer',
    date: 'Jan 2023 – Mar 2023',
    tech: 'React.js, Node.js, Express, Chart.js, REST APIs',
    bullets: [
      "Architected a scalable full-stack web application using React.js and Node.js to deliver real-time stock market insights and financial data visualization.",
      "Integrated highly-available REST APIs (e.g., Alpha Vantage or Yahoo Finance) to fetch, process, and cache up-to-date market trends, improving data retrieval efficiency.",
      "Developed dynamic interactive charting components utilizing Chart.js to help investors seamlessly analyze moving averages and critical technical indicators."
    ]
  },
  {
    title: 'Arxiv Retriever | Open Source Contribution',
    date: 'Oct 2022 – Dec 2022',
    tech: 'TypeScript, LangChain.js, Node.js, LLMs, PDF Parsing',
    bullets: [
      "Contributed to LangChain.js (Open-Source) by engineering a robust arXiv document retriever to seamlessly integrate academic papers into generic AI/LLM pipelines.",
      "Designed natural language query parsers and arXiv ID exact-match tooling entirely in TypeScript, massively enhancing research automation tooling for AI agents.",
      "Implemented dynamic PDF parsing, abstract summarization, and customizable metadata pagination, enabling developers to easily fine-tune vector search retrieval parameters."
    ]
  },
  {
    title: 'Packet Sniffer | Interactive Network Monitor',
    date: 'Jan 2024 – Apr 2024',
    tech: 'Python, Scapy, Multi-threading, BPF, CLI (Rich)',
    bullets: [
      "Engineered a lightweight, interactive command-line packet sniffer using Python and Scapy to capture, monitor, and analyze real-time network traffic patterns and protocol usage (TCP, UDP, ICMP).",
      "Designed and implemented a multi-threaded architecture to decouple packet capturing from user input, enabling real-time terminal controls (pause, resume) without blocking the main execution flow.",
      "Integrated dynamic Berkeley Packet Filter (BPF) syntax support, allowing for highly customizable live filtration of network packets based on custom source IPs, destination IPs, and specific ports.",
      "Developed rich-text terminal visualizations and logging utilities using the Rich library to display real-time protocol statistics and track tracking request-response latencies."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      
      <div className="container projects__container">
        {projectsData.map((project, index) => {
          return (
            <article key={index} className="project">
              <div className="project__head">
                <h3>{project.title}</h3>
                <p className="project__date">{project.date}</p>
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
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

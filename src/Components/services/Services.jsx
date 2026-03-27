import React from "react";
import "./services.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>My Career</h5>
      <h2>Experience</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full-Stack Software Developer Intern - SOTI</h3>
            <p className="service__date">Jan 2025 – Dec 2026 | Mississauga, Canada</p>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Collaborated on installer wizard enhancements to support file streaming over local file DB instead of cloud storage, delivering a saving $1 Million+ in cloud infrastructure expenses.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Implemented LDAP authentication using .NET Core and Angular, securing access for 80% of platform users by automating the removal of invalid connections.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Engineered frontend for webhooks client credentials for OAuth2.0 used by 17,000+ global customers.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Increased test coverage from 10% to 85% by developing 20+ BDD scenarios in SpecFlow, significantly reducing regression bugs in production.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Resolved critical bugs in Deployment Service and Management Service backend infrastructure to improve system stability and service reliability.</p>
            </li>
          </ul>
        </article>
        
        <article className="service">
          <div className="service__head">
            <h3>Software Developer Intern - Ontario Health</h3>
            <p className="service__date">May 2024 – Aug 2024 | Toronto, Canada</p>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Supported DCIS and Corhealth Ontario applications by conducting root-cause analysis to resolve bugs resulting in optimized performance and reliability for ETL pipeline.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Developed cloud-hosted solutions with privacy and security standards, maintaining 100% compliance.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Led code reviews during deployment, reducing production errors by 25%.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Revamped user interface based on stakeholder requirements, reducing user support tickets by improving workflow efficiency.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

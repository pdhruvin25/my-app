import React from "react";
import "./services.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web and Mobile Application Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Create responsive apps that offer seamless experiences across devices</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Utilize the latest frameworks for innovative and secure app development</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Develop custom apps aligned with your unique business needs.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Build apps that work smoothly on iOS, Android, and the web</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Manage the entire app development process from concept to deployment</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
          <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p> Craft user-friendly interfaces for effortless navigation</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Create stunning visuals that captivate and engage users</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Develop smooth interactions for enhanced user experiences</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Ensure designs adapt seamlessly across devices and platforms</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Design with users in mind, focusing on their needs and preferences</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Custom Software Development</h3>
          </div>
          <ul className="service__list">
          <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Develop unique software to meet your unique business needs</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Streamline processes and workflows with custom-built applications</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Build software that grows alongside your business demands</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Integrate specialized features for enhanced performance</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p> Leverage my technical proficiency to create cutting-edge software solutions</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

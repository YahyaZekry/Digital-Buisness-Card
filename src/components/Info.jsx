import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img
        src={./src/assets/profile-picture.jpg}
        alt="Yahya Zekry"
        className="portrait"
      />
      <div className="content">
        <h1 className="name">Yahya Zekry</h1>
        <h4 className="job">Frontend Developer</h4>
        <a
          href="https://youtu.be/B6ue7fSOOcw?t=18"
          rel="noopener noreferrer"
          target="_blank"
          className="website"
        >
          My website
        </a>
        <div className="contact">
          <a href="mailto: yahyazekry@gmail.com">
            <img src="./src/assets/email-button.svg" alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/yahyazekry/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="./src/assets/linkedin-button.svg" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

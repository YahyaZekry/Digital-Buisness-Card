import React from "react";
import github from "../assets/Github.svg";
import facebook from "../assets/Facebook.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://www.facebook.com/yahyazekry89"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook" />{" "}
        </a>
        <a
          href="https://github.com/YahyaZekry/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
      </div>
    </footer>
  );
}

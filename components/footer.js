import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logos">
        <a
          className="footer-link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/abdulwadood-faazli/"
        >
          <img
            className="footer-icon"
            src="/linkedin.png"
            alt="linkedin icon"
          />
        </a>
        <a
          className="footer-link"
          href="https://github.com/abdulwadoodfaazli"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="footer-icon"
            src="/github.png"
            alt="github icon"
          />
        </a>
        <a
          className="footer-link"
          rel="noopener noreferrer"
          href="mailto: abwadood01@gmail.com, awaf2001@connect.hku.hk"
        >
          <img
            className="footer-icon"
            src="/mail.png"
            alt="email icon"
          />
        </a>
      </div>
      <div className="footer-credits">
      <p>&copy; Abdulwadood Ashraf Faazli | 2022</p>
      <p>
        Made with{" "}
        <a rel="noopener noreferrer" href="https://nextjs.org/" target="_blank">
          NextJS
        </a>
      </p>
      </div>
    </div>
  );
}

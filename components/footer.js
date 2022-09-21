import React from "react";
import Image from "next/image";
import github from "/public/github.png";
import linkedin from "/public/linkedin.png";
import mail from "/public/mail.png";

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
          <Image
            className="footer-icon"
            src={linkedin}
            alt="linkedin icon"
            width="30px"
            height="30px"
          />
        </a>
        <a
          className="footer-link"
          href="https://github.com/abdulwadoodfaazli"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className="footer-icon"
            src={github}
            alt="github icon"
            width="30px"
            height="30px"
          />
        </a>
        <a
          className="footer-link"
          rel="noopener noreferrer"
          href="mailto: abwadood01@gmail.com, awaf2001@connect.hku.hk"
        >
          <Image
            className="footer-icon"
            src={mail}
            alt="email icon"
            width="30px"
            height="30px"
          />
        </a>
      </div>
      <div className="footer-credits">
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

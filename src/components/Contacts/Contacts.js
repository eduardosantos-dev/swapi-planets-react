import React from "react";
import githubIcon from "../../assets/Github-icon.svg";
import linkedinIcon from "../../assets/Linkedin-icon.svg";

export default function Contacts() {
  return (
    <div
      className="contacts"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "black",
        textAlign: "center",
        zIndex: 2
      }}
    >
      <a
        href="https://github.com/diinoprp/swapi-planets-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="Logo" height={50} width={50} />
      </a>
      <a
        href="https://www.linkedin.com/in/eduardo-santos-846a42131"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="Logo" height={50} width={50} />
      </a>
    </div>
  );
}

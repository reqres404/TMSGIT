import React from "react";
import "./Hero.css";
import mypic from "../../images/mypic-orange.png";
import resume from "../../images/main-resume.pdf"
import {FaGithub,FaLinkedin,} from "react-icons/fa"
import{IoMdDocument} from "react-icons/io"
const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Hi I am <span>Aditya</span> ,
      </h1>

      <h2>
        I like to think of myself as a <span>Developer</span>
      </h2>
      <br />
      <p>I like exploring new technolgies as much as possible(and I love <span className="js-logo">JS</span>)</p>
      <p>As of now, I have explored</p>
      <p>
      Frontend, Backend, Databases, Cloud, in short I know </p>
      <span>Full Stack Development</span>
      <img className="avtar" src={mypic}></img>
      <div className="icon-container">
        <a className="icons" href="https://github.com/reqres404" target="_blank"><FaGithub/></a>
        <a className="icons" href="https://www.linkedin.com/in/adittyapatil/" target="_blank"><FaLinkedin/></a>
        <a className="icons" target="_blank" href={resume}><IoMdDocument/></a>
      </div>
    </div>
  );
};

export default Hero;

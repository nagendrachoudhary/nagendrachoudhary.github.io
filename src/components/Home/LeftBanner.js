import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter,FaNodeJs, FaLinkedinIn, FaReact, FaGithub, FaPhone } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs,SiNodejs, SiRedux, SiExpress, SiMinutemailer } from "react-icons/si";
import { MdEmail } from 'react-icons/md';
import { Button } from '@chakra-ui/react';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "MERN STACK."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
    const downloadResume = async () => {
      window.open(
        "./NagendraChoudhary_resume.pdf"
      );
    };
  return (
    <div  className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span id="user-detail-name"  className="text-designColor capitalize">Nagendra Choudhary</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p id="user-detail-intro"  className="text-base font-bodyFont leading-6 tracking-wide">
        I am a Full Stack Web Developer and i have knowledge in HTML , CSS , JS , REACT , REDUX and i make user-friendly websites..
        </p>
        
      </div>
      <button
            style={{ backgroundColor: "#75bcd6" }}
            className="group text-white   w-fit px-6 py-3 my-2 flex items-center rounded-md  cursor-pointer"
            id="resume-button-2"
          >
            <a
              id="resume-link-2"
              href="./NagendraChoudhary_resume.pdf"
              download={true}
              target={"_blank"}
              rel="noreferrer"
              onClick={downloadResume}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Resume
            </a>
          </button>
      {/* <button id="resume-button-2" onClick={()=>{handleClick()}}  bg={'red'} color={'white'} _hover={{borderRadius:'50px'}} >Resume</button> */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
              <a href={'https://github.com/nagendrachoudhary'}  id="contact-github" target="_blank" >
            <span className="bannerIcon">
              <FaGithub/>
            </span>
              </a>
              <a href='https://www.linkedin.com/in/nagendra-choudhary/' id="contact-linkedin" target='_blank' >

            <span className="bannerIcon" >
              <FaLinkedinIn />
            </span>
              </a>
              <a href='tel:7230965443' target='_blank' id="contact-phone">
            <span className="bannerIcon"  >
              <FaPhone />
            </span>
              </a>
              <a href='mailto:nagendradangi105@gmail.com' id="contact-email" target='_blank'>
            <span className="bannerIcon"  >
              <MdEmail/>
            </span>
                </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
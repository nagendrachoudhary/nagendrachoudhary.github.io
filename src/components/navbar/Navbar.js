import React, { useState } from 'react'
import { Link } from "react-scroll/modules";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';
import { Avatar } from '@chakra-ui/react';
import { handleClick } from '../../handleClick';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const downloadResume = async () => {
    window.open(
      "./NagendraChoudhary_resume.pdf"
    );
  };
  return (
    <div id="nav-menu" style={{ width: '-webkit-fill-available' }} className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <Avatar w={'50px'} h={'50px'} bg={'ActiveBorder'} borderRadius={'50px'} src={logo}></Avatar>
        {/* <img src={logo} alt="logo" style={{width:'100px',height:'100px'}} /> */}
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">



          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link

              activeClass="active"
              className='nav-link home'
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
              Home
            </Link>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link

              activeClass="active"
              className='nav-link about'
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
              About
            </Link>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link

              activeClass="active"
              className='nav-link skills'
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
              Skills
            </Link>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link

              activeClass="active"
              className='nav-link projects'
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
              Projects
            </Link>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <Link
              activeClass="active"
              className='nav-link contact'
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
              Contact
            </Link>
          </li>
          <li>
            <button
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              id="resume-button-1"
            >
              <a
                href="./NagendraChoudhary_resume.pdf"
                download={true}
                target={"_blank"}
                rel="noreferrer"
                onClick={downloadResume}
                className="nav-link resume"
                id="resume-link-1"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />

              </div>
              <ul className="flex flex-col gap-4">

                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    className='nav-link home'
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                  >
                    Home
                  </Link>
                </li>
                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    className='nav-link about'
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                  >
                    About
                  </Link>
                </li>
                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    className='nav-link skills'
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                  >
                    Skills
                  </Link>
                </li>
                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    className='nav-link projects'
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <button
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    id="resume-button-1"
                    onClick={() => setShowMenu(false)}
                    activeClass="active"

                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a
                      href="./NagendraChoudhary_resume.pdf"
                      download={true}
                      target={"_blank"}
                      rel="noreferrer"
                      onClick={downloadResume}
                      className="nav-link resume"
                      id="resume-link-1"
                    >
                      Resume
                    </a>
                  </button>
                </li>
                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    className='nav-link contact'
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href={'https://github.com/nagendrachoudhary'}  id="contact-github" target="_blank" >
                  <span className="bannerIcon">
                    <FaGithub />
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
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
          </div>
        )}
    </div>
    </div >
  );
}

export default Navbar
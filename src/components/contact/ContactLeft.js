import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nagendra Choudhary</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          i am a skilled Full Stack Web Developer from Jhunjhunu, Rajasthan with proficiency in the MERN stack,
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7230965443</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">nagendradangi105@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href='https://www.instagram.com/mikey.0.1' target='_blank'>
          <span className="bannerIcon">
            <FaInstagram />
        </span>
          </a>
          <a href='https://twitter.com/narenDangi_' target='_blank'>
        <span className="bannerIcon">
          <FaTwitter />
        </span>
          </a>
          <a href='https://www.linkedin.com/in/nagendra-choudhary' target='_blank'>
        <span className="bannerIcon">
          <FaLinkedinIn />
        </span>
          </a>
      </div>
    </div>
    </div >
  );
}

export default ContactLeft
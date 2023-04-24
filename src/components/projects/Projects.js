import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
    id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="project-card">

      <div  className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
          />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Bohemain Traders Clone"
          des="This project is the clone of bohemaintraders.com which is a clothing and accessories selling website"
          src={projectOne}
          git={'https://github.com/nagendrachoudhary/BohemianTraders'}
          deploy={'https://fanciful-genie-644b2c.netlify.app/'}
          tackstack={ 'HTML, CSS, Node.js, Express, MongoDB, React, Redux, Chakra UI, and JavaScript'}
          />
        <ProjectsCard
          title="E-commerce Website"
          des=" This project is the clone of bohemaintraders.com which is a clothing and accessories selling website"
          src={projectTwo}
          git={'https://github.com/UttamMehta/LARQ'}
          deploy={'https://flourishing-maamoul-937bb2.netlify.app/'}
          tackstack={ 'HTML, CSS, React, Redux, Chakra UI, and JavaScript, JSON SERVER'}
          />
        <ProjectsCard
          title="SWIGGY CLONE"
          des="Swiggy is a popular food delivery app in India that allows users to order food from local restaurants and have it delivered to their doorstep"
          src={projectThree}
          git={'https://github.com/nagendrachoudhary/swiggy'}
          deploy={'https://teal-smakager-17bbf3.netlify.app/'}
          tackstack={ 'HTML, CSS, JavaScript , JSON Server'}
          />
      </div>
          </div>
    </section>
  );
}

export default Projects
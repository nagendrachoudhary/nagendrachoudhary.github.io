import React from 'react'
import { gifimg } from '../../assets';
import { Box, Flex, Grid, Image, Text, grid } from '@chakra-ui/react';
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="w-full py-20 border-b-[1px] border-b-black" >
        <h1  style={{ margin:'auto', fontSize: '40px', color: 'red', margin: 'auto' }}>About me</h1>
        <div className="flex flex-col md:flex-col lg:flex-row 2xl:flex-row" >
          <Box m={'auto'} w={'100%'}>
            <Image  src={gifimg} alt='img'/>
          </Box>
          <Box m={'auto'} width={{ base: "100%", md: "45%" }}  mb={'20px'} id="user-detail-intro"  >
             <Text mb={'10px'}>I'm Nagendra Choudhary, a passionate Full Stack Web Developer from Jhunjhunu, Rajasthan with a strong background in the MERN stack. I have learned Full Stack Web Development at Masai School and have become proficient in problem-solving and executing software tasks from start to finish.</Text>
             <Text id="user-detail-name" mb={'10px'}>My skills include HTML, CSS, JS, React, and Redux, which allow me to build dynamic and responsive web applications with ease. I'm always eager to learn new technologies and stay up-to-date with industry trends.</Text>
             <Text mb={'10px'}>I'm committed to contributing to individual and company growth, and I'm currently looking for a company that aligns with my values and interests. I'm open to networking and building connections in my field to find job opportunities and gain valuable advice.</Text>
             <Text mb={'10px'}>After undergoing rigorous training and development, I'm eagerly seeking a challenging opportunity to further develop my skills and grow as a professional.</Text>
          </Box>
          
        </div>
      </div>
    </section>
  );
}
export default About
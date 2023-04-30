import GitHubCalendar from 'react-github-calendar';
import Title from './layouts/Title';
import { FaBootstrap, FaCss3, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiChakraui, SiExpress, SiMongodb, SiRedux } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandJavascript } from 'react-icons/tb'
import { BsServer } from 'react-icons/bs';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="" des="Skills" />
      <SimpleGrid display={'flex'} className='skills-card' flexWrap={'wrap'} gap={'30px'}>
        <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            < AiFillHtml5 className='skills-card-img' />
            <p className="skills-card-name" >
              HTML5
            </p>
          
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            < FaCss3 className='skills-card-img'/>
            <p className="skills-card-name">
              CSS
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <TbBrandJavascript className='skills-card-img' />
            <p className="skills-card-name">
              JS
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <FaReact className='skills-card-img'/>
            <p className="skills-card-name">
              React
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiRedux className='skills-card-img'/>
            <p className="skills-card-name">
              Redux
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiExpress className='skills-card-img'/>
            <p className="skills-card-name">
              Express
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <FaNodeJs className='skills-card-img'/>
            <p className="skills-card-name">
              Node.js
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiMongodb className='skills-card-img'/>
            <p className="skills-card-name">
              DB
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <FaBootstrap className='skills-card-img'/>
            <p className="skills-card-name">
              Bootstrap
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiChakraui className='skills-card-img'/>
            <p className="skills-card-name">
              Chakraui
            </p>
          </span></Box>
          <Box className="skills-card">
          <span  style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <BsServer className='skills-card-img'/>
            <p className="skills-card-name">
              Axios
            </p>
          </span></Box>
      </SimpleGrid>
      <div>
        <Box w={'100%'} alignItems={'center'}>
          <Title title="My Github Calendar" des="" />
          <GitHubCalendar class="react-activity-calendar" style={{ margin: 'auto' }} username="nagendrachoudhary" />
        </Box>
        <SimpleGrid display={'flex'} flexWrap={'wrap'} gap={'10px'}>
          <Image id="github-streak-stats" margin={'auto'} src='https://github-readme-streak-stats.herokuapp.com?user=nagendrachoudhary&theme=react' />
          <Image id="github-top-langs" margin={'auto'} src='https://github-readme-stats.vercel.app/api/top-langs/?username=nagendrachoudhary&langs_count=8' />
          <Image id="github-stats-card" margin={'auto'} src='https://github-readme-stats.vercel.app/api?username=nagendrachoudhary' />
        </SimpleGrid>
      </div>
    </section>
  );
}

export default Skills
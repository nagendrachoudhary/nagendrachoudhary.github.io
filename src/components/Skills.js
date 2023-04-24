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
      <SimpleGrid display={'flex'} flexWrap={'wrap'} gap={'30px'}>
        <Box>
          <span class="skills-card-img" style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            < AiFillHtml5 />
            <p class="skills-card-name" >
              HTML5
            </p>
          
          </span></Box>
          <Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            < FaCss3 />
            <p>
              CSS
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <TbBrandJavascript />
            <p>
              JS
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <FaReact />
            <p>
              React
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiRedux />
            <p>
              Redux
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiExpress />
            <p>
              Express
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <FaNodeJs />
            <p>
              Node.js
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiMongodb />
            <p>
              DB
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <FaBootstrap />
            <p>
              Bootstrap
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <SiChakraui />
            <p>
              Chakraui
            </p>
          </span></Box><Box>
          <span style={{ display: 'flex', flexDirection: 'column' }} className="bannerIcon">
            <BsServer />
            <p>
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
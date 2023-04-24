import { Box, Button } from "@chakra-ui/react";
import Title from "../layouts/Title";
const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
    <Title title="my resume" des="RESUME" />
    <Box display={'flex'} justifyContent={'space-evenly'}>
      <a href='https://drive.google.com/file/d/11Bxbk0y4deWyVKJHnsw3EIWSzxyTlsgF/view?usp=sharing' target="_blank">
          <span  className="bannerIcon">
            <p>
              Resume
            </p>
          </span></a>
          <a href="public/NagendraChoudhary_resume.pdf" download>
          <span className="bannerIcon">
            <p>
              Download
            </p>
          </span></a>
    </Box>
    </section>
  );
}

export default Resume
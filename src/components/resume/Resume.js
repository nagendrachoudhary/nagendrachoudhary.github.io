import { Box, Button } from "@chakra-ui/react";
import Title from "../layouts/Title";
const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
    <Title title="my resume" des="RESUME" />
    <Box display={'flex'} justifyContent={'space-evenly'}>
      <button id="resume-button-1">

      <a id="resume-link-1"  href='https://drive.google.com/file/d/11Bxbk0y4deWyVKJHnsw3EIWSzxyTlsgF/view?usp=sharing' target="_blank">
          <span  className="bannerIcon">
            <p>
              Resume
            </p>
          </span></a>
      </button>
      <button id="resume-button-2">

          <a id="resume-link-2" href="public/NagendraChoudhary_resume.pdf" download>
          <span className="bannerIcon">
            <p   >
              Download
            </p>
          </span></a>
      </button>
    </Box>
    </section>
  );
}

export default Resume
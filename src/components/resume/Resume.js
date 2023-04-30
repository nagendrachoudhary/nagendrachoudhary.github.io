import { Box, Button, transform } from "@chakra-ui/react";
import Title from "../layouts/Title";
import { handleClick } from "../../handleClick";
const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <Box>

    <Title title="my resume" des="RESUME" />
      </Box>
    <Box display={'flex'} justifyContent={'space-evenly'}>
      <Button onClick={()=>{handleClick()}} w={'50px'} bg={'red.300'} color={'red'} _hover={{color:'yellow'}} borderRadius={'full'} id="resume-button-1">   
              Download
      </Button>
    </Box>
    </section>
  );
}

export default Resume
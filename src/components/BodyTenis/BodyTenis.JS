import React from 'react'
import { Flex,SimpleGrid,Heading,Button, Box  } from '@chakra-ui/react'
import Image from "next/image";
import Womenwhite from "../../assets/womenwhite.png";
import Z from "../../assets/Z.png";
const BodyTenis = () => {
  return (
    <div>




<Flex  bg="white"  pl="5rem"  justify="center" pt="50px" gap="20" pb="10">
  
  <SimpleGrid   columns={[1, 1, 2]} spacing='0px' pl="20px"   >
  
{/* <Flex  h="500" w=" 70%" pb="5"><Button  w="403px" h="99px" bg="#C2185B" size="50px"pt="10">ver detalhes</Button></Flex> */}
   
    <Box h="70%" w=" 70%" pb="5"><Heading>
SANDÁLIA PALMILHA 
MATELASSÊ TIRAS ROLOTÊ
</Heading><Button  w="20%" h="10%" bg="#C2185B" size="50px">ver detalhes</Button><Image src={Z} alt="" h="30%"   /></Box>


    <Flex  h="757.94px"   w="95%"><Image src={Womenwhite} alt="" h="757.94px"   /></Flex>
   
  </SimpleGrid>
  </Flex>

 






    </div>
  )
}

export default BodyTenis
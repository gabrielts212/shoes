import React from 'react'
import { Flex,SimpleGrid } from '@chakra-ui/react'
import Image from "next/image";
import Womenwhite from "../../assets/womenwhite.png";
import Z from "../../assets/Z.png";
const BodyTenis = () => {
  return (
    <div>



<Flex  bg="white"  pl="5rem"  justify="center" pt="50px" gap="20" pb="10">
  
  <SimpleGrid   columns={[1, 1, 2]} spacing='0px' pl="20px"   >
  
    
    <Flex   h="500" w=" 70%" pb="5"><Image src={Z} alt="" h="757.94px"   /></Flex>
    <Flex  h="757.94px"   w="95%"><Image src={Womenwhite} alt="" h="757.94px"   /></Flex>
   
  </SimpleGrid>
  </Flex>

 


{/* <Flex w="403px" h="99px"   pl="10rem" align="center">
<Heading>
SANDÁLIA PALMILHA 
MATELASSÊ TIRAS ROLOTÊ
</Heading>
<Button  w="403px" h="99px" bg="#C2185B" size="50px">ver detalhes</Button>
</Flex> */}




    </div>
  )
}

export default BodyTenis
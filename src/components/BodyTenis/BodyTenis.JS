import React from 'react'
import { Flex,SimpleGrid,Heading,Button, Box  } from '@chakra-ui/react'
import Image from "next/image";
import Womenwhite from "../../assets/womenwhite.png";
import sapatos from "../../assets/sapatos.png";
const BodyTenis = () => {
  return (
    <div>




<Flex  bg="white"   justifyContent="center"  pt="50px"  pb="10" >
  
<SimpleGrid   columns={[1, 1, 2]}   pl="30" >

   
<Box as="Flex" w="60%"pb="50" >
<Heading>
SANDÁLIA PALMILHA 
MATELASSÊ TIRAS ROLOTÊ
</Heading>

<Button  w="80%" h="75px" bg="#C2185B" size="50px" fontSize="20px" color="white" pb="10" pt="10">Ver Detalhes</Button>



</Box>
<Image as="Flex" w="90%" h="650px" src={sapatos} alt=""  />

<Box w="70%" >

</Box>
<Image as="Flex" h="939px"   w="70%" src={Womenwhite} alt=""  />

   
  </SimpleGrid>
  </Flex>



    </div>
  )
}

export default BodyTenis
import React from 'react'
import { Flex,Box,H1,Heading,SimpleGrid } from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/minafoto1.png";
import Logo1 from "../../assets/minafoto.png";
const BodyFoto = () => {
  return (
    <div>

<Flex  justify="center" color="black" bg="white" pt="5rem" pb="5rem">

<Heading fontSize="50px" >Encontre seu estilo</Heading>
</Flex>
<Flex  bg="white"  justify="center" gap="20"  align="center" pb="5rem">
  
<SimpleGrid   columns={[1, 1, 2]} spacing='40px' pl="20px"  >

  
  <Flex  h="600px" w=" 80%"><Image src={Logo} alt="" /></Flex>
  <Flex  h="757.94px"   w="95%"><Image src={Logo1} alt="" /></Flex>
 
</SimpleGrid>
</Flex>




    </div>
  )
}

export default BodyFoto
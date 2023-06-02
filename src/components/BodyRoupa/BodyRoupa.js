import React from 'react'
import { Flex,Box,h1,Heading,Button,Text,SimpleGrid } from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/sapatos.png";
import Logoo from "../../assets/sapato2.png";
import Logooo from "../../assets/sapato3.png";
import Logoooo from "../../assets/sapato4.png";

function BodyRoupa() {
  return (
    <div>


<Flex  justify="center" color="white" bg="#C2185B" pt="5rem">


<Heading>30% OFF</Heading>
</Flex>

<Flex justify="center" bg="#C2185B"h="100%">


<SimpleGrid columns={[1, 2, 4]} h="100%" justify="center" gap="20" align="center"pt="5rem" pb="5">
  
<Box  h="388px" w=" 260px"bg="white" >
 <Box bg="white" >
<Image src={Logo} alt="" h="757.94px"   w="600px" />
<Text fontSize='lg'>SCARPIN SALTO FINO BÁSICO</Text>
<Text fontSize='lg'>R$140,00 </Text>

 </Box>
  </Box>
  <Box  h="388px" w=" 260px"bg="white" >
 <Box bg="white" >
<Image src={Logoo} alt="" h="757.94px"   w="600px" />
<Text fontSize='lg'>SCARPIN SALTO FINO BÁSICO</Text>
<Text fontSize='lg'>R$140,00 </Text>

 </Box>
  </Box>
  <Box  h="388px" w=" 260px"bg="white" >
 <Box bg="white" >
<Image src={Logooo} alt="" h="757.94px"   w="600px" />
<Text fontSize='lg'>SCARPIN SALTO FINO BÁSICO</Text>
<Text fontSize='lg'>R$140,00 </Text>

 </Box>
  </Box>
  <Box  h="388px" w=" 260px"bg="white" >
 <Box bg="white" >
<Image src={Logoooo} alt="" h="757.94px"   w="600px" />
<Text fontSize='lg'>SCARPIN SALTO FINO BÁSICO</Text>
<Text fontSize='lg'>R$140,00 </Text>

 </Box>
  </Box>
</SimpleGrid>
</Flex>

 
    </div>
  )
}

export default BodyRoupa
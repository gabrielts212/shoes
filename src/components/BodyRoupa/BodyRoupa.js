import React from 'react'
import { Flex,Box,h1,Heading,Button} from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/sapatos.png";

function BodyRoupa() {
  return (
    <div>
<Flex  justify="center" color="white" bg="#C2185B" pt="5rem">


<Heading>30% OFF</Heading>
</Flex>

<Flex  bg="#C2185B" h="662px" justify="center" gap="20" align="center">


 
  <Flex  h="388px" w=" 260px" >
<Image src={Logo} alt="" h="757.94px"   w="600px" />
  </Flex>
  <Flex  h="388px" w=" 260px" >
<Image src={Logo} alt="" h="757.94px"   w="600px" />
  </Flex>
  <Flex  h="388px" w=" 260px" >
<Image src={Logo} alt="" h="757.94px"   w="600px" />
  </Flex>
  <Flex  h="388px" w=" 260px" >
<Image src={Logo} alt="" h="757.94px"   w="600px" />
  </Flex>
 
</Flex>

 
    </div>
  )
}

export default BodyRoupa
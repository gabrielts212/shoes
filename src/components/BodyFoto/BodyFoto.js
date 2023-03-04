import React from 'react'
import { Flex,Box,H1,Heading} from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/minafoto1.png";
import Logo1 from "../../assets/minafoto.png";
const BodyFoto = () => {
  return (
    <div>

<Flex  justify="center" color="black" bg="white" pt="5rem">


<Heading>encontre seu estilo</Heading>
</Flex>

<Flex  bg="white" h="800.94px" justify="center" gap="20"  align="center">
  <Flex  h="600px" w=" 400px" >
<Image src={Logo} alt="" />
  </Flex>
  <Flex h="757.94px"   w="600px">
<Image src={Logo1} alt="" />
  </Flex>
</Flex>

    </div>
  )
}

export default BodyFoto
import React from 'react'
import { Flex,Box,Button,Heading} from '@chakra-ui/react'
import Image from "next/image";
import Womenwhite from "../../assets/womenwhite.png";
import Z from "../../assets/Z.png";
const BodyTenis = () => {
  return (
    <div>
  <Flex pl="5rem"  justify="center">


{/* <Flex w="403px" h="99px"   pl="10rem" align="center">
<Heading>
SANDÁLIA PALMILHA 
MATELASSÊ TIRAS ROLOTÊ
</Heading>
<Button  w="403px" h="99px" bg="#C2185B" size="50px">ver detalhes</Button>
</Flex> */}

<Flex  justify="center" gap="20" align="center"   height="1000px" >

  <Flex  h="500" w=" 507px" >

<Image src={Z} alt="" h="757.94px"   w="600px" />
  </Flex>
  <Flex  >

<Image src={Womenwhite} alt="" h="757.94px"   w="600px" />
  </Flex>


 </Flex>


</Flex>
    </div>
  )
}

export default BodyTenis
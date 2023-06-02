import React from 'react'
import { Flex} from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/banner.svg";
function Banner() {
  return (
    <div>
<Flex w="100%" h="100%" align="center" justify="center" bg="#e6d1b1">
<Image src={Logo} alt="" width="100%" h="100%" />
</Flex>

    </div>
  )
}

export default Banner
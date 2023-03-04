import React from 'react'
import { Flex} from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/logo2.svg";
function Header() {
  return (
    <div>

<Flex w="100%" h="122px" bg="white">
  <Flex inline="block">

<Image src={Logo} alt="" width="5px" h="5px" />
<Flex>

</Flex>
{/* <ul>
      <li>
        <a href="/home">TODOS OS PRODUTOS</a>
      </li>
      <li>
        <a href="/about">COLEÇÕES</a>
      </li>
      <li>
        <a href="/blog/hello-world">OUTLET</a>
      </li>
    </ul> */}
  </Flex>
</Flex>

    </div>
  )
}

export default Header
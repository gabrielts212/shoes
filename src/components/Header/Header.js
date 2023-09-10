import React from 'react'
import { Flex, UnorderedList,ListItem,Box,Heading,Text,SimpleGrid, Link } from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/logo2.svg";


const headerTitles = [
  {
    title: "Todos os Produtos",
  },
  {
    title: "Coleção",
  },
  {
    title: "Outlet",
  }, 
];
function Header() {
  return (
    <div>

<Flex w="100%" h="122px" bg="white"      justifyContent="space-around" gap="10">

<Link href="/">
<Image src={Logo} alt="" width="5px" h="5px" />
        </Link>

<Flex  align="center" >

<Flex >
  <Flex>
  {headerTitles.map((title, index) => {
                  return (
                    <SimpleGrid  display={["none", "none", "flex", "flex", "flex"]}{...title} key={index}spacing={5} pl="2rem">
                      <Link fontFamily="poppins" fontSize="24px" Flex _hover={{ bg: "#C2185B" }}>{title.title}</Link>
                    </SimpleGrid>
                  );
                })}
  </Flex>
</Flex>
</Flex>
</Flex>




    </div>
  )
}

export default Header
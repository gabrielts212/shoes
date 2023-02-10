import React from 'react'
import { Flex,Box,ListItem,List ,Heading} from '@chakra-ui/react'
import Image from "next/image";
import Logo from "../../assets/logofooter.svg";
const footer = () => {
  return (
    <div>
      {/* <Flex w="100%" h="122px" bg="#C2185B" justify="space-between" >
        <Flex  justify="space-between" >


<Flex>
  
</Flex>
<Flex>
z
</Flex>
<Flex>
d
</Flex>
        </Flex>
      </Flex> */}
      <Flex bg="#C2185B" direction="column"  >
    <Flex p="1rem" width="100%" gap={["0.5rem", "1rem", "2rem", "4rem"]} color="white">
    <Flex size="20px">


        <List spacing={2} >
         
          <ListItem>
<Image src={Logo} alt="" width="5px" h="5px" />
sobre nós
perguntas frequentes
politica de privacidade
rastreamento de pedidos
trabalhe conosco
contato</ListItem>
      
        </List>
        <Flex>

   
</Flex>


      </Flex>



      <Flex width={["100%", "100%", "20%"]} flexDir={["column", "column", "row", "row"]}>

        <List spacing={2}>
          <Heading>Categorias</Heading>
          <ListItem>Saúde</ListItem>
          <ListItem>Tecnologia</ListItem>
          <ListItem>Business</ListItem>
          <ListItem>Marketing</ListItem>
          <ListItem>Marketing</ListItem>
          
        </List>
       
      </Flex>
   
      <Flex size="20px">
        <List spacing={2} >
          <Heading>institucional</Heading>
          <ListItem>
sobre nós
perguntas frequentes
politica de privacidade
rastreamento de pedidos
trabalhe conosco
contato</ListItem>
      
        </List>
      </Flex>
    </Flex>
    <Flex justifyContent="space-between" w="100%" p="1rem" >
     


    </Flex>
  </Flex>
    </div>
  )
}

export default footer
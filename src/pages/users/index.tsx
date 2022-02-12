import { Text,Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList(){
                                
    const isWideVersion=useBreakpointValue({
        base:false,
        lg:true
      })
    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Users</Heading>
                        <Link href="users/create" passHref> 
                        <Button 
                        as='a' 
                        size="sm" 
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine}/>}
                        >
                            Criar Novo
                        </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Th>
                                <Th>
                                    User
                                </Th>
                                {isWideVersion &&<Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]} >
                                <Checkbox colorScheme="pink"></Checkbox>   
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">maxsuel lima</Text>
                                        <Text fontSize="small" color="gray.300">maxsuelslima@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                {isWideVersion && <Text> 04 de dez, 1999</Text>}
                                </Td>
                                <Td>
                        
                                {isWideVersion &&                                 
                                <Button 
                                as='a' 
                                size="sm" 
                                fontSize="sm"
                                colorScheme="purple"
                                leftIcon={<Icon fontSize="16" as={RiPencilLine}/>}
                                >
                                </Button>}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}
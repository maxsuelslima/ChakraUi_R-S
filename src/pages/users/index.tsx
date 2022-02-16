import { Text,Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { QueryClient, useQuery } from "react-query";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList(){

    const [page,setPage]=useState(1)
    console.log(page)
    const {data, isLoading,error,isFetching}=useUsers(page)



    const isWideVersion=useBreakpointValue({
        base:false,
        lg:true
      })

      useEffect(()=>{

      },[])

      async function handlePrefetcherUser(userId:number){
        await queryClient.prefetchQuery(['user',userId],async()=>{
            const response= await api.get(`/users/${userId}`)
            
            console.log(response.data)
            return response.data
        })
      }

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Users
                            {!isLoading&&isFetching&&<Spinner ml="4" color="gray.500" size="sm"/>}
                            </Heading>
                        <NextLink href="users/create" passHref> 
                        <Button 
                        as='a' 
                        size="sm" 
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine}/>}
                        >
                            Criar Novo
                        </Button>
                        </NextLink>
                    </Flex>
                    {isLoading?(<Flex justify="center"><Spinner/></Flex>):
                    error?(<Flex justify="center">
                                <Text> Flash user</Text>
                            </Flex>)
                            :(
                            <>
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
                                    {data.users.map(user=>{
                                        return(
                                            <Tr key={user.id}>
                                                <Td px={["4","4","6"]} >
                                                <Checkbox colorScheme="pink"></Checkbox>   
                                                </Td>
                                                <Td>
                                                  <Box>
                                                    <Link color="purple.400" onMouseEnter={()=>handlePrefetcherUser(parseInt(user.id))}>
                                                     <Text fontWeight="bold">{user.name}</Text>
                                                    </Link>
                                                    <Text fontSize="small" color="gray.300">{user.email}</Text>
                                                  </Box>
                                                 </Td>
                                                <Td>
                                                    {isWideVersion && <Text> {user.createdAt}</Text>}
                                                </Td>
                                                <Td>
                                                {isWideVersion                          
                                                &&<Button 
                                                    as='a' 
                                                    size="sm" 
                                                    fontSize="sm"
                                                    colorScheme="purple"
                                                    leftIcon={<Icon fontSize="16" as={RiPencilLine}/>}
                                                    />
                                                  }
                                                </Td>
                                            </Tr>

                                        )}

                                    )}
                                </Tbody>
                                </Table>
                            <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage}/>
                            </>
                            )}
                </Box>
            </Flex>
        </Box>
    )
}
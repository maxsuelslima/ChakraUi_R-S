import { Box, Button, Flex, Heading, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import Link from "next/link";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";

import { SideBar } from "../../components/SideBar";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../services/api";


type CreateUserFormData={
    name:string,
    email:string,
    password:string,
    password_confirmation:string;
}

const createUserFormSchema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required('email obrigatorios').email('email invalido'),
    password:yup.string().required('senha obrigatoria').min(6, 'precisa de 6 caracters'),
    password_confirmation:yup.string().oneOf([
        null, yup.ref('password')
    ], 'as senhas precisam ser igauas')
})

export default function CreateUser(){
    const createUser=useMutation(async (user:CreateUserFormData)=>{
        const response=await api.post('users',{
            user:{
                ...user,
                create_at:new Date(),
            }
        })
        return response.data.user;
    })

    const { register,handleSubmit,formState }=useForm({
        resolver:yupResolver(createUserFormSchema)
    })
    const {errors}=formState
  
    const handleCreateUser: SubmitHandler<CreateUserFormData>=async(values)=>{
        await new Promise(resolve=>setTimeout(resolve,2000));
        await createUser.mutateAsync(values)
        console.log(values)
    }

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">

                <SideBar/>
                <Box 
                as="form"
                flex="1" 
                borderRadius={8} 
                bg="gray.800" 
                p={["6","8"]}
                onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar user</Heading>
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                                <Input 
                                name="name" 
                                label="Nome Completo"
                                {...register('name')}
                                error={errors.name}
                                />
                                <Input 
                                {...register('email')}
                                error={errors.email}
                                 name="email" type="email" label="E-mail"/>
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                                <Input 
                                name="password" 
                                label="Password" 
                                type="password"
                                {...register('password')}
                                error={errors.password}
                                />
                                <Input 
                                name="password_confirmation" 
                                type="password"
                                {...register('password_confirmation')}
                                error={errors.password_confirmation} 
                                label="Confirmação de senha"/>
                            </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end" >
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                            <Button
                            as="a"
                            colorScheme="whiteAlpha"
                            >
                                cancel
                            </Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>
                                Save</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
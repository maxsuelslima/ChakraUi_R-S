import { Button, Flex, FormLabel, Stack, FormControl, useBreakpoint } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

type SingInFormData={
  email:string;
  password:string
}

export default function Home() {

  const {signIn}=useContext(AuthContext)
  
  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('');

  const signInFormSchema=yup.object().shape({
    email:yup.string().required('email obrigatorios').email('email invalido'),
    password:yup.string().required('senha obrigatoria')
  })
  
  const {register, handleSubmit, formState}=useForm({
    resolver:yupResolver(signInFormSchema)
  })

  const {errors}=formState


    const HandleSingIn:SubmitHandler<SingInFormData>=async(values)=>{
      
      await signIn(values)
    
    }

  return (

      <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      >

      <Flex
      as="form"
      width="100%"
      maxW={360}
      p="8"
      borderRadius={8}
      flexDir="column"
      bgColor='gray.700'
      color="gray.100"
      onSubmit={handleSubmit(HandleSingIn)}
      >
      <Stack spacing="4">
        <Input name="email" error={errors.email} type="email" label= "E-mail" {...register('email',{required:"Email obrigatorio !"})}/>
        <Input name="password" error={errors.password} type="password" label= "Password" {...register('password',{required:"senha obrigatoria"})}/>
      </Stack>
      <Button type="submit" mt={6} colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}

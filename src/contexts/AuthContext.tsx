import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/authApi";


type SignInCredential={
    email:string;
    password:string

}
type AuthContextData={
    signIn(credentials:SignInCredential):Promise<void>;
    isAuthenticated:boolean;
}

type AuthProviderProps={
    children:ReactNode
}

export const AuthContext=createContext({} as AuthContextData)

export function AuthProvider({children}){
    const isAuthenticated=false;
    const [response,setResponse]=useState()
    useEffect(()=>{console.log(response)},[response])
    async function signIn({email,password }:SignInCredential){
        try{
            const respons = await api.post('sessions',{
                email,
                password})
                setResponse(response)
        }catch(err){
            console.log(err)
            console.log('error')
        }
        console.log(response)
    }

    return(
        <AuthContext.Provider value={{signIn,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

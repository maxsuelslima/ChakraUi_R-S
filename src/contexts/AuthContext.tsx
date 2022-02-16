import { createContext, ReactNode } from "react";
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

    async function signIn({email,password }:SignInCredential){

        try{
            const response = await api.post('/sessions',{
                email,
                password})
            console.log(response)
        }catch(err){
            console.log(err)
            console.log('error')
        }
    }

    return(
        <AuthContext.Provider value={{signIn,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

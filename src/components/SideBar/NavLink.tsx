import { LinkProps as ChakraLinkProps,Icon, Link as ChakraLink,Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";
import Link from 'next/link'
import { ActiveLink } from "../ActiveLink";

interface NavLink extends ChakraLinkProps{
    icon:ElementType;
    children: string;
    href:string
}

export function NavLink({href,icon,children,...rest}:NavLink){
    return(
        <ActiveLink href={href} passHref> 
                <ChakraLink display="flex" {...rest}>
                    <Icon as={icon} fontSize="20"/>
                    <Text ml="4" fontWeight="medium">{children}</Text>
                </ChakraLink>
        </ActiveLink>
    )
}
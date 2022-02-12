import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { SideBarNav } from "./SideBarNav";

export function SideBar(){
    const {isOpen, onClose}=useSideBarDrawer()
    const isDrawerSideBar=useBreakpointValue({
        base:true,
        lg:false,
    })
    if(isDrawerSideBar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg="gray.800" p="4">
                    <DrawerCloseButton mt="6"/>
                    <DrawerHeader>Navega</DrawerHeader>
                    <DrawerBody>
                        <SideBarNav/>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        )
    }
    return(
        <Box 
        as="aside" 
        w="64" 
        mr="8">
            <SideBarNav/>
        </Box>
    )
}
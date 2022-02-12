import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiUser2Line } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
    return(
        <Box 
        as="aside" 
        w="64" 
        mr="8">
            <Stack 
            spacing="12" 
            align="flex-start"
            >
               <NavSection title="geral">
                    <NavLink href="/dashboard"icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink href="/users"icon={RiUser2Line}>Users</NavLink>
                </NavSection>
                <NavSection title="teste">
                    <NavLink href="/teste" icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink href="/olaria" icon={RiDashboardLine}>Dashboard</NavLink>
                </NavSection>
            </Stack>

        </Box>
    )
}
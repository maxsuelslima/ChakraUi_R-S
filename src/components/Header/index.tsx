import {IconButton,Flex, useBreakpointValue, Icon} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { useSideBarDrawer } from '../../contexts/SideBarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';


export function Header(){

    const {onOpen} =useSideBarDrawer()

    const isWideVersion=useBreakpointValue({
        base:false,
        lg:true
    })
    return(
        <Flex
        w="100%"
        as="header"
        maxW={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        >



                    {!isWideVersion && (
                        <IconButton 
                        aria-label='Open navigation'
                        icon={
                        <Icon as={RiMenuLine}/>
                        }
                        variant="unstyled"
                        fontSize="24"
                        onClick={onOpen}
                        mr="2"
                        mt="3"
                        >
                    
                    </IconButton>
                    )}
                    <Logo/>
                    {isWideVersion && <SearchBox/>}
                    <NotificationsNav/>
                    <Profile showProfileData={isWideVersion}/>
        </Flex>
    );
}
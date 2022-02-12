import { Flex,Box, Text,Avatar } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?:boolean;
}

export function Profile({showProfileData=true}:ProfileProps){
    return(
        <Flex
        align="center"
        >
            {showProfileData &&(
                            <Box
                            mr="4"
                            textAlign="right"
                            >
                               <Text> Maxsuel Santos de Lima</Text> 
                                <Text 
                                color="gray.300" 
                                fontSize="small"
                                > 
                                maxsuelslima@gmail.com 
                                </Text>
                            </Box>
            )}
            <Avatar size="md" name="Maxsuel Lima"/>
        </Flex>
    );
}
import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination(){
    return(
        <Stack 
        direction={["column", "row"]}
        mt="8"
        justify="space-between"
        align="center"
        spacing="6"
        >
        <Box>
            <strong>1-10 de 100</strong>
        </Box>
        <Stack 
        direction="row"
        >
        <PaginationItem number={1} isCurrent/>
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        </Stack>
        </Stack>
    )
}
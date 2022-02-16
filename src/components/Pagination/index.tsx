import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps{
    totalCountOfRegisters:number;
    registerPerPage?:number;
    currentPage?:number;
    onPageChange:(page:number)=>void
}


export function Pagination({totalCountOfRegisters,registerPerPage=10,currentPage=1,onPageChange}:PaginationProps){

    const lastPage=Math.ceil(totalCountOfRegisters/registerPerPage)
    /*Essa constante é o total de registro dividido pelo número de registros,
     arrendondada pra cima*/

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
            {   
                <>  
                    {(currentPage>3) && (<PaginationItem onPageChange={onPageChange} number={1}/>)} 
                    {(currentPage>3) && (<Text>...</Text>)}
                    {(currentPage>1) && (<PaginationItem onPageChange={onPageChange} number={currentPage-1}/>)}
                    <PaginationItem onPageChange={onPageChange} isCurrent number={currentPage}/>
                    {(currentPage<lastPage-1) && (<PaginationItem onPageChange={onPageChange} number={currentPage+1}/>)}
                    {(currentPage<lastPage-2) && (<Text>...</Text>)}
                    {(currentPage!=lastPage) && (<PaginationItem onPageChange={onPageChange} number={lastPage}/>)}
                </>
            }
        </Stack>
        </Stack>
    )
}
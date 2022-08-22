import { AddIcon, Box, Button, Heading, HStack, Input, SearchIcon, VStack } from "native-base";

const Patient = () => {
    return (
        <Box>
            <VStack space="5px">
            <HStack justifyContent="space-between" alignItems="center" width="100%">
                <Heading color="text.800" size="md">Paciente</Heading>
                <Button leftIcon={<AddIcon size="xs"/>} variant="ghost" >
                    Cadastrar
                </Button>
            </HStack>
            <Input InputLeftElement={<SearchIcon color="muted.500" paddingLeft="14px" size="sm"/>} placeholder="Nome do paciente" placeholderTextColor="text.400" size="lg"></Input>
            </VStack>
        </Box>
    )
}

export default Patient;
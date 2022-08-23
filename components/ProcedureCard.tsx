import { Box, Checkbox, HStack, Text, VStack } from "native-base";
import { Procedure } from "../interfaces/Procedure";

interface ProcedureCardProps {
    procedure: Procedure; 
}

const ProcedureCard = (procedureCardProps: ProcedureCardProps) => {

  const priceF = 'R$ ' + procedureCardProps.procedure.price.toFixed(2).replace('.', ',');
  

  return (
    <Box bg="white">
      <HStack alignItems="center">
        <Checkbox mr="8px" value="" isChecked={procedureCardProps.procedure.checked}/>
        <VStack>
          <Text color="text.400" fontSize="xs" fontWeight="light" mt="8px">{priceF}</Text>
          <Text color="text.800" fontSize="sm" fontWeight="semibold">{procedureCardProps.procedure.title}</Text>
          <Text color="text.600" fontSize="xs" fontWeight="normal" mb="8px">{procedureCardProps.procedure.description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default ProcedureCard;
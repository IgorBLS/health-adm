import { Box, Checkbox, HStack, Text, VStack } from "native-base";
import { Procedure } from "../interfaces/Procedure";

interface ProcedureCardProps {
    procedure: Procedure; 
}

const ProcedureCard = (procedureCardProps: ProcedureCardProps) => {

  const priceF = procedureCardProps.procedure.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  return (
    <Box bg="white">
      <HStack alignItems="center">
        <Checkbox marginRight="8px" value="" isChecked={procedureCardProps.procedure.checked}/>
        <VStack>
          <Text color="text.400" fontSize="xs" fontWeight="light" marginTop="8px">{priceF}</Text>
          <Text color="text.800" fontSize="sm" fontWeight="semibold">{procedureCardProps.procedure.title}</Text>
          <Text color="text.600" fontSize="xs" fontWeight="normal" marginBottom="8px">{procedureCardProps.procedure.description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default ProcedureCard;
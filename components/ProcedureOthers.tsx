import { HStack, Text } from "native-base";

interface ProcedureOthersProps {
    length?: number;
}

const ProcedureOthers = (procedureOthersProps: ProcedureOthersProps) => {
    if (procedureOthersProps.length && procedureOthersProps.length > 3) {
        return (
            <HStack>
                <Text color="text.400" fontSize="xs">E outros </Text>
                <Text color="secondary.600" fontSize="xs">{procedureOthersProps.length - 3 } serviços</Text>
            </HStack>
        )
    } else {
        return (<HStack></HStack>);
    }
};

export default ProcedureOthers;
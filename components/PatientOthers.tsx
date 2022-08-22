import { HStack, Text } from "native-base";

interface PatientOthersProps {
    length?: number;
}

const PatientOthers = (patientOthersProps: PatientOthersProps) => {
    if (patientOthersProps.length && patientOthersProps.length > 3) {
        return (
            <HStack>
                <Text color="text.400" fontSize="xs">E outros </Text>
                <Text color="secondary.600" fontSize="xs">{patientOthersProps.length - 3 } pacientes</Text>
            </HStack>
        )
    } else {
        return (<HStack></HStack>);
    }
};

export default PatientOthers;
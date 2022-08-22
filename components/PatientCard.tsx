import { AddIcon, Avatar, Button, Heading, HStack, Text, VStack } from "native-base";
import { Patient }  from '../interfaces/Patient';

interface PatientCardProps {
  patient: Patient;
}

const PatientCard = (patientCardProps: PatientCardProps) => {
  return (
    <HStack alignItems="center" justifyContent="flex-end" paddingY="8px">
      <VStack marginLeft="0" marginRight="auto">
        <HStack alignItems="center" space="7px">
          <Avatar bg="emerald.600" size="xs">
            <Text color="text.50" fontSize="2xs" fontWeight="light">{patientCardProps.patient.name.substring(0,2)}</Text>
          </Avatar>
          <Heading color="text.800" size="xs">{patientCardProps.patient.name}</Heading>
        </HStack>
        <Text color="text.600" fontSize="xs">{patientCardProps.patient.procedure?.title}</Text>
      </VStack>
      <Button alignItems="flex-end" height="31px" variant="outline" width="63px">
        <Text color="primary.600" fontSize="2xs">Atender</Text>
      </Button>
      <Button alignItems="flex-end" variant="unstyled">
        <AddIcon color="primary.600" size="2xs"/>
      </Button>
    </HStack>
  );
}

export default PatientCard;
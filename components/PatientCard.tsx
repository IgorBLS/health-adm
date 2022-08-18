import { AddIcon, Avatar, Button, Heading, HStack, Text, VStack } from "native-base";

interface PatientCardProps {
  doctor: string,
  name: string,
  procedure: string
}

const PatientCard = (patientCardProps: PatientCardProps) => {
  return (
    <HStack alignItems="center" justifyContent="flex-end" paddingY="8px">
      <VStack marginLeft="0" marginRight="auto">
        <HStack alignItems="center" space="7px">
          <Avatar bg="emerald.600" size="sm">{patientCardProps.doctor}</Avatar>
          <Heading color="text.800" size="xs">{patientCardProps.name}</Heading>
        </HStack>
        <Text color="text.600" fontSize="xs">{patientCardProps.procedure}</Text>
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
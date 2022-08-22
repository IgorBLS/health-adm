import { Box, Button, Heading, HStack, Text, VStack } from "native-base";
import { useCallback, useState } from "react";
import { Patient } from '../interfaces/Patient';
import PatientCard from '../components/PatientCard';
import PatientOthers from "../components/PatientOthers";

const Schedule = () => {

  const [patients, setPatients] = useState<Patient[] | null>(
    [
      {name: 'Igor Lobo',       procedure: {title: 'Limpeza de pele',      description: 'Limpeza facial',                      price: 150, date: new Date ('August 22, 2022 07:00:00')}},
      {name: 'Jean Paulo',      procedure: {title: 'Preenchimento labial', description: 'Preenchimento com ácido hialurônico', price: 250, date: new Date ('August 22, 2022 08:00:00')}},
      {name: 'Thayse Nara',     procedure: {title: 'Aplicação de botox',   description: 'Botox de sobrancelha',                price: 200, date: new Date ('August 22, 2022 09:00:00')}},
      {name: 'Yasmin Salsicha', procedure: {title: 'Micro agulhamento',    description: 'Micro agulhamento',                   price: 150, date: new Date ('August 22, 2022 10:00:00')}},
      {name: 'Jaffer Diniz',    procedure: {title: 'Lifting facial',       description: 'Lifting facial',                      price: 150, date: new Date ('August 22, 2022 11:00:00')}},
      {name: 'Emilio Milho',    procedure: {title: 'Esfoliação',           description: 'Esfoliação',                          price: 100, date: new Date ('August 22, 2022 12:00:00')}}
    ]
  );

  const renderListPatients = useCallback(() => {
    return (patients ?? []).slice(0,3 ?? patients?.length).map((patient) => <PatientCard patient={patient}/>);
  },[]);

  return (
    <Box>
      <HStack justifyContent="space-between" alignItems="center" width="100%">
        <Heading color="text.800" size="md">Agenda</Heading>
        <Button variant="ghost" size="md">Ver todos</Button>
      </HStack>
      <Text color="muted.500" fontSize="sm" fontWeight="bold">Hoje</Text>
      {renderListPatients()}
      <PatientOthers length={patients?.length}/>
    </Box>
  );
}

export default Schedule;
import { Box, Button, Heading, HStack, Input, VStack } from "native-base";
import { useCallback, useState } from "react";
import ProcedureCard from "../components/ProcedureCard";
import ProcedureOthers from "../components/ProcedureOthers";
import { Procedure } from "../interfaces/Procedure";

const Procedures = () => {

    const [procedures, setProcedures] = useState<Procedure[] | null>(
        [
            {checked: false, title: 'Limpeza de pele',      description: 'Limpeza facial',                      price: 150, date: new Date ('August 22, 2022 07:00:00')},
            {checked: false, title: 'Preenchimento labial', description: 'Preenchimento com ácido hialurônico', price: 250, date: new Date ('August 22, 2022 08:00:00')},
            {checked: false, title: 'Aplicação de botox',   description: 'Botox de sobrancelha',                price: 200, date: new Date ('August 22, 2022 09:00:00')},
            {checked: false, title: 'Micro agulhamento',    description: 'Micro agulhamento',                   price: 150, date: new Date ('August 22, 2022 10:00:00')},
            {checked: false, title: 'Lifting facial',       description: 'Lifting facial',                      price: 150, date: new Date ('August 22, 2022 11:00:00')},
            {checked: false, title: 'Esfoliação',           description: 'Esfoliação',                          price: 100, date: new Date ('August 22, 2022 12:00:00')}
        ]
      );

      const renderListPatients = useCallback(() => {
        return (procedures ?? []).slice(0,3 ?? procedures?.length).map((procedure) => <ProcedureCard procedure={procedure}/>);
      },[]);

    return (
        <Box>
            <VStack space="5px">
                <HStack justifyContent="space-between" alignItems="center" width="100%">
                    <Heading color="text.800" size="md">Serviços</Heading>
                    <Button variant="ghost">Ver todos</Button>
                </HStack>
                {renderListPatients()}
                <ProcedureOthers length={procedures?.length}/>
            </VStack>
        </Box>
    );
}

export default Procedures;
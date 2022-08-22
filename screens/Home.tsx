import { AddIcon, Avatar, Box, Button, Heading, HStack, Text, VStack } from "native-base";
import Patient from "./Patient";
import Schedule from "./Schedule";
import Procedures from "./Procedures";

interface HomeProps {
    user: string;
    bank: number;
}

const Home = (homeProps: HomeProps) => {
  
  const today = (new Date())
    .toLocaleString('pt-BR', {weekday: 'long', day: 'numeric', month: 'long'})
    .split(' ')
    .map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
    .toString()
    .replaceAll(',', ' ')
    .replace('-feira', '')
    .replace('De', 'de')
    .replace('  ', ', ');

  const bankF = homeProps.bank.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

  return (
    <VStack>
      <Box height="153px" bg="warmGray.50" padding="24px 16px 20x 16px" width="100%">
        <HStack alignItems="center" height="41px" width="288px">
          <Box height="32px" width="32px">
            <Avatar bg="cyan.600" size="sm">{homeProps.user.substring(0,2)}</Avatar>
            <Avatar bg="white" height="10px" width="10px" position="absolute" right="0" bottom="0">
              <Avatar bg="success.600" height="8px" width="8px"/>
            </Avatar>
          </Box>
          <VStack paddingLeft="8px" height="100%" width="215px">
            <Heading color="text.800" size="sm">Olá, {homeProps.user}</Heading>
            <Text color="text.500" size="sm">{today}</Text>
          </VStack>
          <Button color="primary.600" variant="unstyled">
            <AddIcon color="" margin="auto" size="xs"/>
          </Button>
        </HStack>
        <Box height="64px" paddingTop="20px" width="135px">
          <HStack alignItems="center">
            <Heading color="primary.600" paddingLeft="4px" size="md">{bankF}</Heading>
            <Button color="primary.600" variant="unstyled">
              <AddIcon color="primary.600" size="2xs"/>
            </Button>
          </HStack>
          <Button variant="unstyled" width="78px"><Text color="secondary.600" fontSize="xs" paddingLeft="10px">Ver extrato</Text></Button>
        </Box>
      </Box>
      <Box height="651px" paddingX="16px" width="100%">
        <VStack space="24px" paddingTop="6px" width="100%">
          <Schedule/>
          <Patient />
          <Procedures />
        </VStack>
      </Box>
    </VStack>
  );
}

export default Home;
import { AddIcon, Avatar, Box, Button, Heading, HStack, Text, VStack } from "native-base";
import Patient from './Patient';
import Schedule from './Schedule';
import Procedures from './Procedures';
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { BackHandler } from "react-native";

interface HomeProps {
    user: string;
    bank: number;
}

function prettier(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDate(string: string) : string {
  return prettier(format((new Date()), string, {locale: ptBR}));
}

const Home = (homeProps: HomeProps) => {
  
  const weekday = getDate('EEEE, d').replace('-feira', '');
  const month = getDate('MMMM');
  const today = weekday + ' de ' + month;

  const bankF = 'R$ ' + homeProps.bank.toFixed(0);

  return (
    <VStack>
      <Box h="153px" pt="24px" w="100%">
        <HStack alignItems="center" h="41px">
          <Box h="32px" w="32px">
            <Avatar bg="cyan.600" size="sm">{homeProps.user.substring(0,2)}</Avatar>
            <Avatar bg="muted.50" h="10px" w="10px" position="absolute" right="0" bottom="0">
              <Avatar bg="success.600" h="8px" w="8px"/>
            </Avatar>
          </Box>
          <VStack pl="8px" h="100%" w="215px">
            <Heading color="text.800" size="sm">Olá, {homeProps.user}</Heading>
            <Text color="text.500" size="sm">{today}</Text>
          </VStack>
          <Button color="primary.600" variant="unstyled">
            <AddIcon size="xs"/>
          </Button>
        </HStack>
        <Box h="64px" pt="20px" w="135px">
          <HStack alignItems="center">
            <Heading color="primary.600" pl="4px" size="md">{bankF}</Heading>
            <Button color="primary.600" variant="unstyled">
              <AddIcon color="primary.600" size="2xs"/>
            </Button>
          </HStack>
          <Button variant="unstyled" w="85px">
            <Text color="secondary.600" fontSize="xs">Ver extrato</Text>
          </Button>
        </Box>
      </Box>
      
      <Box w="100%">
        <VStack space="24px" paddingTop="6px" w="100%">
          <Schedule />
          <Patient />
          <Procedures />
        </VStack>
      </Box>
    </VStack>
  );
}

export default Home;
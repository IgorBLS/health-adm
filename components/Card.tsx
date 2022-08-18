import { Box, Checkbox, HStack, Text, VStack } from "native-base";

interface CardProps {
    price: string,
    title: string,
    desc: string
}

const Card = (cardProps: CardProps) => {
  return (
    <Box bg="white">
      <HStack alignItems="center">
        <Checkbox value="" marginRight="8px"></Checkbox>
        <VStack>
          <Text fontSize="xs" fontWeight="light" marginTop="8px">{cardProps.price}</Text>
          <Text fontSize="sm" fontWeight="semibold">{cardProps.title}</Text>
          <Text fontSize="xs" fontWeight="normal" marginBottom="8px">{cardProps.desc}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Card;
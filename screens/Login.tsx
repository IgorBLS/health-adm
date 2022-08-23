import { AddIcon, Box, Button, Divider, Heading, HStack, Input, Text, View, VStack } from "native-base";
import { useState } from "react";

const Login = () => {

  const [user, setUser] = useState<string>();
  const [pass, setPass] = useState<string>();

  const signIn = () => {
    if (!user) {
      alert("TODO Usuário vazio");
      return;
    }
    if (!pass) {
      alert("TODO Senha vazia");
      return;
    }

    alert("TODO Sign-in");
  }

  const forgotPassword = () => {
    alert("TODO Esqueceu a senha");
  }

  const googleSignIn = () => {
    alert("TODO Google sign-in");
  }

  return (
    <VStack>
      <Box h="188px" justifyContent="center" w="100%">
        <Box h="80px" w="160px"></Box>
      </Box>
      <Box h="380px" w="100%">
        <VStack space="20px">
          <Heading color="text.800" size="md">Acesse sua conta</Heading>
          <Input onChangeText={(user) => setUser(user)} placeholder="Usuário" placeholderTextColor="text.400" size="lg" value={user}/>
          <Input onChangeText={(pass) => setPass(pass)} placeholder="Senha" placeholderTextColor="text.400" size="lg" value={pass}/>
          <HStack>
            <Button justifyContent="flex-start" onPress={forgotPassword} pl="0" variant="ghost" w="50%">Esqueci a senha</Button>
            <Button onPress={signIn} w="50%">Entrar</Button>
          </HStack>
          <View alignItems="center" flexDirection="row">
            <Divider flex="1"/>
              <Text color="muted.300" mx="16px">Acesse com</Text>
            <Divider flex="1"/>
          </View>
          <Button color="muted.900" leftIcon={<AddIcon color="muted.900" size="xs"/>} m="auto" onPress={googleSignIn} pt="10px" variant="unstyled" w="100%" >
            Gmail
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Login;
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
      <Box height="188px" justifyContent="center" paddingX="16px" width="100%">
        <Box height="80px" backgroundColor="warmGray.100" width="160px"></Box>
      </Box>
      <Box height="380px" width="100%" paddingX="16px">
        <VStack space="20px">
          <Heading color="text.800" size="md">Acesse sua conta</Heading>
          <Input onChangeText={(user) => setUser(user)} placeholder="Usuário" placeholderTextColor="text.400" size="lg" value={user}/>
          <Input onChangeText={(pass) => setPass(pass)} placeholder="Senha" placeholderTextColor="text.400" size="lg" value={pass}/>
          <HStack>
            <Button justifyContent="flex-start" onPress={forgotPassword} paddingLeft="0" variant="ghost" w="50%">Esqueci a senha</Button>
            <Button onPress={signIn} w="50%">Entrar</Button>
          </HStack>
          <View alignItems="center" flexDirection="row">
            <Divider color="muted.300" flex="1"/>
              <Text color="muted.300" marginX="16px">Acesse com</Text>
            <Divider bg="muted.300" flex="1"/>
          </View>
          <Button color="muted.900" leftIcon={<AddIcon color="muted.900" size="xs"/>} margin="auto" onPress={googleSignIn} paddingTop="10px" variant="unstyled" width="100%" >
            Gmail
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Login;
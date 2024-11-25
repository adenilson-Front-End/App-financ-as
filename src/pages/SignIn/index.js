import {
  Background,
  AreaForm,
  Title,
  AreaImage,
  Logo,
  AreaInput,
  Input,
  Label,
  SubmitButton,
  SubmitText,
  Link,
  TextLink,
} from './style';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';

export default function SigIn() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { login, authLoading } = useContext(AuthContext);
  const navigation = useNavigation();

  function handleUser() {
    login(email, password);
  }
  return (
    <Background>
      <AreaImage>
        <Logo source={require('../../img/Logo1.png')} />
      </AreaImage>
      <AreaForm>
        <Title>Fazer login</Title>

        <AreaInput>
          <Label>Email:</Label>
          <Input value={email} onChangeText={(value) => setEmail(value)} />

          <Label>Senha:</Label>
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleUser}>
          {authLoading ? (
            <ActivityIndicator size={30} color={'#fff'}></ActivityIndicator>
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <TextLink>Criar uma conta</TextLink>
        </Link>
      </AreaForm>
    </Background>
  );
}

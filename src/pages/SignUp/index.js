import { useNavigation } from '@react-navigation/native';
import {
  Background,
  TextTitulo,
  AreaForm,
  AreaInput,
  Input,
  Label,
  SubmitButton,
  SubmitText,
  Elipse,
  AreaIcon,
  Header,
} from './styled';

import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';
export default function SignUp() {
  const { SignUp, authLoading } = useContext(AuthContext);
  const [ nome, setNome ] = useState('');
  const [ email, SetEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigation = useNavigation();

  function handleSignUp() {

    if (nome === '' || email === '' || password === '') return
    SignUp(nome, email, password);
    setNome('')
    SetEmail('')
    setPassword('')
    navigation.goBack()
  }
  return (
    <Background>
      <Elipse></Elipse>
      <Header>
        <AreaIcon onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={25} color={'#fff'} />
        </AreaIcon>
      </Header>
      <TextTitulo>Criar uma conta</TextTitulo>

      <AreaForm>
        <AreaInput>
          <Label>Nome:</Label>
          <Input value={nome} onChangeText={(value) => setNome(value)} />

          <Label>Email:</Label>
          <Input value={email} onChangeText={(value) => SetEmail(value)} />

          <Label>Senha:</Label>
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
          {authLoading ? (
            <ActivityIndicator size={30} color={'#fff'}></ActivityIndicator>

          ) : (
            <SubmitText>Criar conta</SubmitText>

          )
          }
        </SubmitButton>
      </AreaForm>
    </Background>
  );
}

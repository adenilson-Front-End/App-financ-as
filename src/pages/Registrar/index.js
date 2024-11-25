import { TouchableWithoutFeedback, Keyboard, Platform, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/Header/header';
import {
  Background,
  Container,
  AreaForm,
  Input,
  ButtonRegistrar,
  TextButton,
} from './style';
import { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function Registrar() {

  const { authLoading } = useContext(AuthContext)
  const navigation = useNavigation();
  const [ descriptionItem, setDescriptionItem ] = useState('');
  const [ valor, SetValor ] = useState(null);
  const [ type, setType ] = useState('');
  const [ selectedValue, setSelectedvalue ] = useState(0);
  const [ despesa, setDespesa ] = useState([
    { key: 1, tipo: 'Selecione' },
    { key: 2, tipo: 'receita' },
    { key: 3, tipo: 'despesa' },
  ]);

  let despesaSelected = despesa.map((v, k) => {
    return <Picker.Item key={v.key} value={v.key} label={v.tipo} />;
  });

  async function addTransaction() {
    const response = await api.post('/receive', {
      description: descriptionItem,
      value: Number(valor),
      type: selectedValue === 2 ? 'receita' : 'despesa',
      date: format(new Date(), 'dd/MM/yyyy'),
    });
    setDescriptionItem('');
    SetValor('');
    setSelectedvalue(1);
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      onPress={() => Keyboard.dismiss()}
    >
      <Background>
        <Header title={'Novo registro'} />
        <Container>
          <AreaForm>
            <Input
              value={descriptionItem}
              onChangeText={(value) => setDescriptionItem(value)}
              placeholder="Descrição"
            />
            <Input
              keyboardType='numeric'
              value={valor}
              onChangeText={(value) => SetValor(value)}
              placeholder="Valor"
            />

            <Picker
              style={{ width: '100%', backgroundColor: '#fff' }}
              selectedValue={selectedValue}
              onValueChange={(value, indexValue) => setSelectedvalue(value)}
            >
              {despesaSelected}
            </Picker>

            <ButtonRegistrar activeOpacity={0.8} onPress={addTransaction}>
              {authLoading ? (
                <ActivityIndicator size={30} color={'#fff'}></ActivityIndicator>
              ) : (
                <TextButton>Registrar</TextButton>
              )}
            </ButtonRegistrar>
          </AreaForm>
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}

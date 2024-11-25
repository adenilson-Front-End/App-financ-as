import { Area, Background, Label, ListBalance, ButtonCalendar } from './style';
import Header from '../../components/Header/header';
import api from '../../services/api';
import { useContext, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import BalanceItem from '../../components/BalanceItem';
import { useIsFocused } from '@react-navigation/native';
import { Modal } from 'react-native';
import CalendarModal from '../../components/CalendarModal';
import Icon from 'react-native-vector-icons/Feather'

import HistoryList from '../../components/HistoryList';
import { AuthContext } from '../../contexts/auth';


export default function Home() {

  const { setRenderizarGrafico } = useContext(AuthContext)

  const [ movements, setMovements ] = useState([]);
  const [ listBalance, setListBalance ] = useState([]);
  const [ dateMovements, setDateMovements ] = useState(new Date());
  const [ modalVisible, setModalVisible ] = useState(false);


  const isFocused = useIsFocused()


  useEffect(() => {

    let isActive = true;
    async function getMovements() {
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
        setRenderizarGrafico(receives.data)


      }

    }


    getMovements();
    return () => (isActive = false);
  }, [ dateMovements, isFocused, handleDeleteRegister() ]);

  function filterDataMoviments(selectedDate) {
    setDateMovements(selectedDate);
  }



  async function handleDeleteRegister(id) {
    try {
      api.delete('receives/delete', {
        params: {
          item_id: id
        }
      })


    } catch (err) {
      console.log('Error ao deletar registro: ', err.code)
    }
  }


  return (
    <Background>
      <Header title={'Movimentações'} />

      <ListBalance
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={listBalance}
        key={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <ButtonCalendar style={{ flexDirection: 'row' }} onPress={() => setModalVisible(true)}>
          <Icon name='calendar' size={30} color={'#fff'} />
          <Label>Últimas movimentações</Label>
        </ButtonCalendar>

      </Area>

      <Modal visible={modalVisible} transparent={true} animationType='fade'>
        <CalendarModal fechaModal={() => setModalVisible(false)} handleFilter={filterDataMoviments} />
      </Modal>

      <HistoryList data={movements} deleteRegister={handleDeleteRegister} />


    </Background>
  );
}

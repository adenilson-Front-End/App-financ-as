import { Container, TextNomeUser, TextSaudacao, Logo } from './styled';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
export default function CustomDrawer(props) {
  const { user } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Logo resizeMode="contain" source={require('../../img/Logo.png')} />
        <TextSaudacao>Bem-vindo</TextSaudacao>
        <TextNomeUser numberOfLines={1}>{user.name}</TextNomeUser>
      </Container>

      <DrawerItemList {...props}></DrawerItemList>
    </DrawerContentScrollView>
  );
}

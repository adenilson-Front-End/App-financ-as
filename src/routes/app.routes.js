import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import CustomDrawer from '../components/CustomDrawer';
import Registrar from '../pages/Registrar';
import Perfil from '../pages/Perfil';
import DashBoard from '../pages/Dashboard';
const AuthDrawer = createDrawerNavigator();

export default function AuthHome() {
  return (
    <AuthDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'rgba(0,0,0,.7)',
          borderRightWidth: 1,
          borderRightColor: 'rgba(255,255,255,.3)',

        },

        drawerContentStyle: {
          marginTop: 30,
        },

        drawerActiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#ffff',
        drawerInactiveBackgroundColor: 'transparent',
      }}
    >
      <AuthDrawer.Screen name="Home" component={Home} />
      <AuthDrawer.Screen name="Registrar" component={Registrar} />
      <AuthDrawer.Screen name="Perfil" component={Perfil} />
      <AuthDrawer.Screen name="DashBoard" component={DashBoard} />
    </AuthDrawer.Navigator>
  );
}

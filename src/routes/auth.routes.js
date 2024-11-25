import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../pages/SignUp';
import SigIn from '../pages/SignIn';

export function AuthRoutes() {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SignIn" component={SigIn} />

      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;

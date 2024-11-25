import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/auth';
import { StatusBar } from 'react-native';
import ListProvider from './src/contexts/auth';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationContainer>
        <ListProvider>
          <StatusBar barStyle={'light-content'} />
          <Routes />
        </ListProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

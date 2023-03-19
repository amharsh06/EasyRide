import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navdrawer } from './src/route/DrawerNav';
import { ConfigStore } from './src/ redux/Store';
import { Provider } from 'react-redux';
import FaqAdder from './src/container/FaqAdder';



export default function App() {
  const store = ConfigStore()
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Navdrawer />
      </NavigationContainer> */}
      <FaqAdder/>
    </Provider>
    // <Start/>
   
  )

}

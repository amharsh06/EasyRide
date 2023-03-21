import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ConfigStore } from './src/ redux/Store';
import { Provider } from 'react-redux';
import FaqAdder from './src/container/FaqAdder';
import { Navdrawer } from './src/route/DrawerNav';
import PinAdd from './src/container/PinAdd';
import DriverRegistration from './src/container/DriverRegistration';
import Extra from './src/container/DriverRegistration';



export default function App() {
  const store = ConfigStore()
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Navdrawer />
      </NavigationContainer> */}
      {/* <FaqAdder/> */}
      {/* <PinAdd /> */}
      <Extra />

    </Provider>
    // <Start/>

  )

}

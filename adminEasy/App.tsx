import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import FaqAdd from './src/container/FaqAdd';
import { Navdrawer } from './src/route/DrawerNav';

export default function App() {
  return (

      <NavigationContainer>
        <Navdrawer />
      </NavigationContainer>

    
  )
}
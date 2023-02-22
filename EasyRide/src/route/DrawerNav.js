import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './TabNavigator';
import { Demo } from './StackNavigator';


const Drawer = createDrawerNavigator();


const DrawerNav=()=>{
    return(
<Drawer.Navigator>
      <Drawer.Screen name="Demo" component={TabNavigator} />
      <Drawer.Screen name="Hello" component={Demo} />
    </Drawer.Navigator>

    )
}

export{DrawerNav}
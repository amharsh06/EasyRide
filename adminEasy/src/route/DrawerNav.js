import { createDrawerNavigator } from '@react-navigation/drawer';
import FaqAdd from '../container/FaqAdd';
import * as React from 'react';

const Drawer = createDrawerNavigator();


export const Navdrawer = () => {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="FAQ" component={FaqAdd} />
    </Drawer.Navigator>
    )
}
 
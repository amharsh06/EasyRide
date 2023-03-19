import { createDrawerNavigator } from '@react-navigation/drawer';

import * as React from 'react';
import FaqAdder from '../container/FaqAdder';

const Drawer = createDrawerNavigator();


export const Navdrawer = () => {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name="FAQ" component={FaqAdder} />
    </Drawer.Navigator>
    )
}
 
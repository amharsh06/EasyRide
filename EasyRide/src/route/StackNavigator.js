import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashbord from '../Container/Screens/Dashbord';
import Registration from '../Container/Screens/Registration';
import Demo1 from '../Component/Demo1';
import Demo2 from '../Component/Demo2';
const Stack = createNativeStackNavigator();
const Demo = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Dashbord" component={Dashbord} />
            <Stack.Screen name="Registration" component={Registration} options={{
                title: 'Registration',
                headerStyle: {
                    backgroundColor: '#194AF9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',

                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontSize: 25,
                    fontFamily: 'Poppins-SemiBold',
                    fontWeight: '700',
                },
                statusBarColor: '#194AF9',
                
            }} /> */}

            <Stack.Screen name="Demo1" component={Demo1} />
            <Stack.Screen name="Demo2" component={Demo2} />




        </Stack.Navigator>
    )
}

export { Demo }
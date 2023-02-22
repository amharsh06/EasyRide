import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Demo3 from '../Component/Demo3';
import Demo4 from '../Component/Demo4';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Demo } from './StackNavigator';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return(
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        // tabBarStyle: { position: 'absolute',useBottomTabBarHeight: 100 },
        // tabBarBackground: () => (
        //     <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        //   ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          else if (route.name === 'Infinite') {
            iconName = focused ? 'infinite' : 'infinite-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={35} color={color} />;
          
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        
      })}
    >
        <Tab.Screen name="Home" component={Demo3} />
        <Tab.Screen name="Infinite" component={Demo} />
        <Tab.Screen name="Settings" component={Demo4} />

    </Tab.Navigator>
    )
}
export { TabNavigator }
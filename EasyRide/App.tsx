import React from "react";
import 'react-native-gesture-handler';
import { Header } from "react-native/Libraries/NewAppScreen";
import AvailableDriver from "./src/Container/Screens/AvailableDriver";
import Dashbord from "./src/Container/Screens/Dashbord";
import FAQC from "./src/Container/Screens/FAQC";
import Permisionocation from "./src/Container/Screens/Permisionocation";
import Registration from "./src/Container/Screens/Registration";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Demo } from "./src/route/StackNavigator";
import PassDri from "./src/Container/PassDri";
import { TabNavigator } from "./src/route/TabNavigator";
import { DrawerNav } from "./src/route/DrawerNav";


function App(): JSX.Element {
  return <>

    <NavigationContainer>
      {/* <Demo/> */}
      {/* <TabNavigator/> */}
      <DrawerNav/>
    </NavigationContainer>

    {/* <PassDri/> */}
  </>
}
export default App;
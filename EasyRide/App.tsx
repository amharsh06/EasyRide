import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { View } from "react-native";
import Splace from "./src/Container/Screens/Splace";
import Spl from "./src/Container/Screens/Spl";

function App (): JSX.Element{
  return<>
    <View>
      {/* <Splace/> */}
      <Spl/>
    </View>
  </>
}
export default App;
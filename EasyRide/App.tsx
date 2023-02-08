import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { View } from "react-native/types";
import Hello from "./src/Container/Screens/Hello";

function App (): JSX.Element{
  return<>
    <View>
      <Hello/>
    </View>
  </>
}
export default App;

import React from 'react';
import { Text, View } from 'react-native';
import Intro from './src/container/Intro/Intro';
import Counter from './src/component/Counter';
import IntroFun from './src/container/Intro/IntroFun';
import CounterFun from './src/container/Intro/CounterFun';
import Time from './src/container/TimeClass/Time';
import TimeFunction from './src/container/TimeClass/TimeFunction';
import IntroProps from './src/container/Intro/IntroProps';
import Country from './src/container/Intro/Country';
import CountryFun from './src/container/Intro/CountryFun';
import { Provider } from 'react-redux';
import { configStore } from './src/redux/Store';
function App(): JSX.Element {
  const store = configStore();

  return (

    <View>
      {/* <Intro /> */}
      {/* <Counter /> */}
      {/* <IntroFun /> */}
      {/* <CounterFun /> */}
      {/* <Time /> */}
      {/* <TimeFunction/> */}
      {/* <Country/> */}
      {/* <CountryFun/> */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
  );
}


export default App;


import React from 'react';
import {Text} from 'react-native';
import Intro from './src/container/Intro/Intro';
import Counter from './src/container/Intro/Counter';
import IntroFun from './src/container/Intro/IntroFun';
import CounterFun from './src/container/Intro/CounterFun';
function App(): JSX.Element {
 

  return (
<>
<Intro />
<Counter />
<IntroFun />
<CounterFun />
</>
  );
}


export default App;

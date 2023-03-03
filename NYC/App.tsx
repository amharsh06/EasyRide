import React from 'react';
import { Text, View, } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './src/container/Counter';
import { ReduxStore } from './src/redux/store';
function App(): JSX.Element {
  let store = ReduxStore();
  return (
    <View>
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
    
  );
}

export default App;

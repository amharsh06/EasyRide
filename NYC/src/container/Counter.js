import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementCount, IncrementCount } from '../redux/action/Counter.Action';
export default function Counter() {

    const dispatch = useDispatch();
    const dataView = useSelector(state => state.countInfo);
    return (
        <View>
            <Button style={styles.button} title="INCREMENT" onPress={() => { dispatch(IncrementCount()) }}/>
               
            
            <Text> {dataView.count}</Text>
            <Button style={styles.button} title="DECREMENT" onPress={() => { dispatch(DecrementCount()) }}/>
                
            
        </View>
    )
}


const styles = StyleSheet.create({
   
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    
  });
  
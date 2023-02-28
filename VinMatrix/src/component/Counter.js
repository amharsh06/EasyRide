import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/action/count.action';


export default function Counter() {
    const dispatch = useDispatch();
    const counterData = useSelector(state => state.counterDig);

    console.log("View", counterData);

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <View>
           

            <Button
                onPress={() => handleIncrement()}
                title="Increment"
                color="#841584"
            />
            <Text>{counterData.count}</Text>

            <Button
               onPress={() => handleDecrement()}
                title="Decrement"
                color="#841584"
            />
        </View>
    )
}
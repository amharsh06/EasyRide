import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function CounterFun() {
    const [press, setPress] = useState(0);
    const changeInc = () => {
        setPress(press + 1)
    }
    const changeDec = () => {
        if (press>0){
            setPress(press - 1)
        }
}
    return (
        <View>
            <Text>Press = {press}</Text>
            <Button
                onPress={() => changeInc()}
                title="Increment"
                color="#841584"
            />
            <Button
                onPress={() => changeDec()}
                title="Decrement"
                color="#841584"
            />
        </View>
    )
}
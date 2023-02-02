import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'

export default function IntroFun() {
    const [name, setName] = useState("Amit");
    const [id, setValue] = useState(101);
    const change = () => {
        setName('Piyush');
        setValue(102)
        // Alert.alert("Crash");
    }
    return (
        <View>
            <Text>ID : {id}</Text>
            <Text>Name: {name}</Text>

            <Button
                onPress={() => change()}
                title="Change"
                color="#841584"
            />
        </View>
 
    )
}
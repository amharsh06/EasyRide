import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Demo2({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    return (
        <View>
            <Text style={styles.text}>Details Screen</Text>
            <Text style={styles.text}>itemId: {JSON.stringify(itemId)}</Text>
            <Text style={styles.text}>otherParam: {JSON.stringify(otherParam)}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        color:'red',
        fontSize:32
    }
})
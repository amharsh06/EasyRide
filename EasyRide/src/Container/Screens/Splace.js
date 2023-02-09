import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Splace extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cont1}>
                    <Text>Harsh</Text>
                </View>
                <View style={styles.cont2}>
                    <Text>Splace</Text>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '50%',
        backgroundColor: '#fff',
    },
    cont1: {
        flex: 1,
        backgroundColor: 'red',
    },

    cont2: {
        flex: 3,
        backgroundColor: 'blue',
    }
});
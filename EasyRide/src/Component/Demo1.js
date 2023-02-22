import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Demo1({ navigation }) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Demo2', {
                itemId: 1,
                otherParam: 'anything you want here',
            })}>
                <Text style={styles.btnText}>Item1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Demo2', {
                itemId: 2,
                otherParam: 'anything you want here',
            })}>
                <Text style={styles.btnText}>Item2 </Text>
            </TouchableOpacity><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Demo2', {
                itemId: 3,
                otherParam: 'anything you want here',
            })}>
                <Text style={styles.btnText}>Item3 </Text>
            </TouchableOpacity><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Demo2', {
                itemId: 4,
                otherParam: 'anything you want here',
            })}>
                <Text style={styles.btnText}>Item4 </Text>
            </TouchableOpacity><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Demo2', {
                itemId: 5,
                otherParam: 'anything you want here',
            })}>
                <Text style={styles.btnText}>Item5 </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#194AF9',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 90,
        marginHorizontal: 30,
        marginTop: 12,

    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 800,
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },
})
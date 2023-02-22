import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FAQD() {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <Text style={styles.sub1Text}>FAQ</Text>
            </View>
            <View style={styles.subcontainer2}>
                <Text style={styles.sub2Text}>Drivers do not respond</Text>
                <Text style={styles.decText}>If a driver has not responded  to your ride
                    request, try to another driver.Bear in mind that during rush hour drivers are busier, so expect to wait or sand request to other.</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    subcontainer1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    sub1Text: {
        fontSize: 25,
        flexDirection: 'row',
        color: '#0D0F17',
        fontweight: 600,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 700,

    },
    subcontainer2: {
        flex: 10,
       
    },
    sub2Text: {
        fontSize: 22,
        flexDirection: 'row',
        color: '#0D0F17',
        fontweight: 600,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 700,
        margin: 15,
        marginTop: 2,

    },
    decText: {
        fontSize: 16,
        flexDirection: 'row',
        color: '#898989',
        fontFamily: 'Poppins',
        fontWeight: 700,
        margin: 16,
        marginTop: 5,


    },

})
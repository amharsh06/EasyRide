import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FAQreview() {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <Text style={styles.sub1Text}>FAQ</Text>
            </View>
            <View style={styles.subcontainer2}>
                <Text style={styles.sub2Text}>How to leave a review for a drive</Text>
                <Text style={styles.decText}>Open the app immediately after the ride is complete. you will see a window where you can evaluated the driver and write a review. if you did not enjoy your ride and you decide to write a negative review, don’t worry-the drfiveer will not see that it was you.</Text>
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
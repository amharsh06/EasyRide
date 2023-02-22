import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FAQC() {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <Text style={styles.sub1Text}>FAQ</Text>
            </View>
            <View style={styles.subcontainer2}>
                <Text style={styles.sub2Text}>How to complain</Text>
                <Text style={styles.decText}>If you had a connflict with the driver, write to us: open a chat with support via the side menu or write to us at support@easyride.com
                </Text>
                <Text style={styles.decText}>We look into all complaints and blocks drivers who violate the rule of our service..</Text>
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
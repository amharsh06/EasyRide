import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Permisionocation() {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer1}>

                <View style={styles.subsubcon1}>
                    <Entypo name="location-pin" color={'#194AF9'} size={170} style={{alignSelf:'center',marginTop:50,}} />
                </View>
                <View style={styles.subsubcon2}>
                    <Text style={styles.locatiotext}>
                        Location Access
                    </Text>
                    <Text style={styles.backtext}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
            </View>
            <View style={styles.subcontainer2}>
                <TouchableOpacity style={styles.buttonclose}>
                    <AntDesign name="close" color={'white'} size={48} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttoncheck}>
                    <AntDesign name="check" color={'white'} size={48} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    subcontainer1: {
        flex: 2,
    },
    subcontainer2: {
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonclose: {
        backgroundColor: '#FF7C50',
        alignItems: 'center',
        borderRadius: 90,
        width: 80,
        height: 80,
        justifyContent: 'center',
        margin: 13,
    },
    buttoncheck: {
        backgroundColor: '#419DFF',
        alignItems: 'center',
        borderRadius: 90,
        width: 80,
        height: 80,
        justifyContent: 'center',
        margin: 13,
    },
    subsubcon1: {
        flex: 2,
        alignContent:'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:'center',

    },
    subsubcon2: {
        flex: 1,
        padding: 16,
    },
    backtext: {
        justifyContent: 'center',
        fontSize: 14,
        textAlign: 'center',
        color: '#898989',
        margin: 18,
        alignItems: 'center',
    },
    locatiotext: {
        justifyContent: 'center',
        fontSize: 24,
        textAlign: 'center',
        color: '#0D0F17',
        margin: 5,
        alignItems: 'center',
        fontWeight: 700,
    },
})
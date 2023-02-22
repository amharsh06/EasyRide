import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Registration() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.btnview1}>
                    <Image source={require('../../assets/Images/car.png')} style={styles.img} />
                    <Text style={styles.vectorText}>Car</Text>
                </View>
                <View style={styles.btnview2}>
                    <AntDesign style={styles.icon} color="black" name="right" size={40} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.btnview1}>
                    <Image source={require('../../assets/Images/scooter.png')} style={styles.img} />
                    <Text style={styles.vectorText}>Scooter</Text>
                </View>
                <View style={styles.btnview2}>
                    <AntDesign style={styles.icon} color="black" name="right" size={40} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <View style={styles.btnview1}>
                    <Image source={require('../../assets/Images/bike.png')} style={styles.img} />
                    <Text style={styles.vectorText}>Two Wheel</Text>
                </View>
                <View style={styles.btnview2}>
                    <AntDesign style={styles.icon} color="black" name="right" size={40} />
                </View>
            </TouchableOpacity>
            <View style={styles.subcontainer2}>
{/* not for work */}
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
        alignItems: 'center',
        alignContent:'center',

    },
    sub1Text: {
        fontSize: 25,
        flexDirection: 'row',
        color: '#0D0F17',
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 700,

    },
    btn: {
        flex: 1.3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        margin: 15,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOpacity: 0.9,
        elevation: 10,
        shadowRadius: 20,
    },

    subcontainer2: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    img: {
        marginLeft: 20,

    },
    vectorText: {
        color: '#0D0F17',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        marginLeft: 15,
        fontWeight: 700,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        color: '#898989',
        flexDirection: 'row',
        backgroundColor: 'balck',
        marginLeft: 15,
    },
    btnview1: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    btnview2: {
        flex: 1,
        flexDirection: 'row',
        margin: 10

    }
})
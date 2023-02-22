import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function AvailableDriver() {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <Text style={styles.sub1Text}>Available Driver</Text>
            </View>
            <View style={styles.subcontainer2}>
                <View style={styles.driverFlex}>
                    <View style={styles.tabcon1}>
                        <View style={styles.profile}>
                            <Image source={require('../../assets/Images/profile.png')} style={styles.icon}/>
                        </View>
                        <View style={styles.Bio}>
                            <Text>img</Text>
                        </View>
                    </View>
                    <View style={styles.tabcon2}>
                        <Text>Buttons</Text>
                    </View>
                </View>

            </View>
            <View style={styles.subcontainer3}>
                <Text style={styles.sub1Text}>Available Driver.....</Text>
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
        backgroundColor: 'green'

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
        flex: 2.5,
        backgroundColor: 'black',
        borderWidth: 1,
    },
    subcontainer3: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    tabcon1: {
        flex: 5,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'green',

    },
    tabcon2: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'red',
    },
    driverFlex: {
        flex: 1,
        backgroundColor: 'red',
    },
    Bio:{
        flex:5,
        backgroundColor: 'skyblue',
        
    },
    profile:{
        flex:2,
        backgroundColor: 'black',
    },
    icon:{
        justifyContent: 'center',
        alignItems: 'center',
    }

})
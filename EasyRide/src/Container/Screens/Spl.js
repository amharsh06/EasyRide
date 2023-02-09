import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function Spl() {
    return (
        
        //LinearGradient Part
        <LinearGradient colors={['#ACBDFA', '#194AF9']} style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoSection}>
            <Image source={require('../../assets/Images/logo.png')} />
            </View>
            {/* Button Section */}
            <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    btnText:{
        color:'#194AF9',
        fontWeight:800,
    },
    logoSection:{
        backgroundColor:null,
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonSection:{
        flex:1,
        backgroundColor:null,
        justifyContent:'center',
    },
    button:{
        backgroundColor:'white',
        alignItems:'center',
        paddingHorizontal:30,
        paddingVertical:20,
        borderRadius:90,
        marginHorizontal:25,

    }
});
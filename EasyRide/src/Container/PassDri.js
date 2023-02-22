import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PassDri() {
  return (
    <View style={style.container}>
        <View style={style.info}>
            <Text style={style.infotext}>Are You a Passenger or a Driver?</Text>
        </View>
        <View style={style.img}>
            <Image source={require('../assets/Images/PassDri.png')} style={style.logo}/>
        </View>
        <View style={style.btn}>
            <TouchableOpacity>
                <Text style={style.btnpass}>Passenger</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={style.btndri}>Driver</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:40,
        // paddingHorizontal:50,
        alignItems:'center',
    },
    info:{
        flex:1,
        backgroundColor:null,
        justifyContent:'center',
    },
    infotext:{
        textAlign:'center',
        color:'black',
        fontSize:22,
        fontWeight:600,
        fontFamily:'Poppins-SemiBold',
    },
    img:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    logo:{
        marginTop:40,
    },
    btn:{
        flex:2,
        marginTop:100,
        width:'100%',
        paddingVertical:40,
    },
    btnpass:{
        backgroundColor:'#194af9',
        color:'white',
        padding:8,
        borderRadius:30,
        textAlign:'center',
        fontSize:22,
        marginTop:10,
        fontFamily:'Poppins-SemiBold',
    },
    btndri:{
        backgroundColor:'#B6B6B6',
        color:'black',
        padding:8,
        borderRadius:30,
        textAlign:'center',
        marginTop:20,
        fontSize:22,
        fontWeight:600,
        fontFamily:'Poppins-SemiBold',
    }
})
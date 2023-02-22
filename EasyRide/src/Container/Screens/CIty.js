import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function City() {
  return (
    <View style={styles.container}>
     
     <View style={styles.vi}>
     <Text style={styles.text} >Are You In This City?</Text>
     </View>
     
      
      <View style={styles.img}>
      <Image  source={require('../../assets/Images/location.png')} />
      <Text style={styles.text2}>Surat</Text>
      </View>
      
      <View>
        <TouchableOpacity>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  vi:{
    flex:1
  },
  text:{
    marginTop:83,
    fontSize:30,
    fontWeight:600,
    color:'black',
   textAlign:'center'  
  },
  img:{
    flex:4,
    alignItems:'center',
    marginTop:100
  },
  text2:{
    marginTop:20,
    fontWeight:500,
    fontSize:25,
    color:'black'
  },
  btn:{
    backgroundColor:'blue',
    color:'white',
    padding:15,
    borderRadius:30,
    margin:20,
    textAlign:'center',
    fontSize:22
  }
})
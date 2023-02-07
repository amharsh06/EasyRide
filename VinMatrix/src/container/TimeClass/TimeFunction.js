import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../assets/Color/Colors';
import Octicons from 'react-native-vector-icons/Octicons';

export default function TimeFunction() {
  const [time, setTime] = useState(new Date());
  const tick = () => {
    setTime(new Date())
  }
  useEffect(() => {
    //3. componentDidMount 4.componentDidUpdate
    let refTime = setInterval(tick, 1000);
    return () => {
      //5.componentwillUnMount
      clearInterval(refTime);
    }
  }, [time]);
  //2.render
  return (
    <View>
      <Octicons name="clock" color={Colors.primary} size={140} style={styles.clock} />
      <Text style={styles.int}>{time.toLocaleTimeString()}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  int: {
    marginTop: 30,
    textAlign: 'center',
    color: Colors.fonttwo,
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',

  },
  clock: {
    display:'flex',
    marginTop: 150,
    color: 'white',
    textAlign: 'center',
  }
})
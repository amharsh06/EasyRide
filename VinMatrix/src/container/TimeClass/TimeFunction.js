import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

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
      <Text style={styles.int}>{time.toLocaleTimeString()}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    int: {
        marginTop: 360,
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    
    }
})
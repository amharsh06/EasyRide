import { Text, View } from 'react-native'
import React, { Component } from 'react'
import City from './City'

export default class Country extends Component {
  render() {
    return (
      <View>
        <Text>Country</Text>
        <City abc={'India'}/>
      </View>
    )
  }
}
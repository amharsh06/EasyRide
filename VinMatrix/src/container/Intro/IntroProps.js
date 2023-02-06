import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class IntroProps extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.introProp}</Text>
        <Text>IntroProps</Text>
      </View>
    )
  }
}
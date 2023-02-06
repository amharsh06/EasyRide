import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class City extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.abc}
        </Text>
        <Text>City</Text>
      </View>
    )
  }
}
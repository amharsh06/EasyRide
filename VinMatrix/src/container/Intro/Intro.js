import { Alert, Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import IntroProps from './IntroProps';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 101,
      Name: 'Harsh'
    }
  }
  ClassFun = () => {
    Alert.alert("Harsh")
    this.setState({
      Id: 102,
      Name: 'Vinit'
    }
    )
  }
  render() {
    return (
      <View>
        <Text>
          ID : {this.state.Id}
        </Text>
        <Text>
          Name : {this.state.Name}
        </Text>
        <Button
          onPress={() => this.ClassFun()}
          title="Learn More"
          color="#841584"
        />
        <IntroProps introProp={"Intro"}/>
      </View>
    )
  }
}
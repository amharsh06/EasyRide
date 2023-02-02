import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Press: 0,
        }
    }
    ClassFunInc = () => {
        this.setState({
            Press: this.state.Press + 1,
        })
    }
    ClassFunDec = () => {
        if (this.state.Press > 0) {
            this.setState({
                Press: this.state.Press - 1,
            })
        }
    }
    render() {
        return (
            <View>
                <Text>Press Time = {this.state.Press} </Text>
                <Button
                
                
                    onPress={() => this.ClassFunInc()}
                    title="Increment"
                    color="#841584"
                />

                <Button
                    onPress={() => this.ClassFunDec()}
                    title="Decrement"
                    color="#841584"
                />
            </View>
        )
    }
}
import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }
    tick = () => {
        this.setState({
            time: new Date()
        })
    }
    componentDidMount = () => {
        this.rel = setInterval(this.tick, 1000)
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState) {
            console.log('componentDidUpdate called');
        }
    }
    componentWillUnmount = () => {
        clearInterval(this.rel);
    }
    render() {
        return (
            <View>
                <Text>{this.state.time.toLocaleTimeString()}</Text>
            </View>
        )
    }
}   
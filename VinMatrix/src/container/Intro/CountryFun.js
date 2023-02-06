import { View, Text } from 'react-native'
import React from 'react'
import CityFun from './CityFun'

export default function CountryFun() {
    return (
        <View>
            <Text>Country</Text>
            <CityFun abc={'UAE'} />
        </View>
    )
}
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
const data1 = [

    { label1: 'Item 1', value: '1' },
    { label1: 'Item 3', value: '3' },
    { label1: 'Item 2', value: '2' },
    { label1: 'Item 4', value: '4' },
    { label1: 'Item 5', value: '5' },
    { label1: 'Item 6', value: '6' },
    { label1: 'Item 7', value: '7' },
    { label1: 'Item 8', value: '8' },
];
const data2 = [

    { label2: 'Item 1', value: '1' },
    { label2: 'Item 2', value: '2' },
    { label2: 'Item 3', value: '3' },
    { label2: 'Item 4', value: '4' },
    { label2: 'Item 5', value: '5' },
    { label2: 'Item 6', value: '6' },
    { label2: 'Item 7', value: '7' },
    { label2: 'Item 8', value: '8' },
];

const data3 = [

    { label3: 'Item 1', value: '1' },
    { label3: 'Item 2', value: '2' },
    { label3: 'Item 3', value: '3' },
    { label3: 'Item 4', value: '4' },
    { label3: 'Item 5', value: '5' },
    { label3: 'Item 6', value: '6' },
    { label3: 'Item 7', value: '7' },
    { label3: 'Item 8', value: '8' },
];





export default function Dashbord({navigation}) {
    const [value, setValue] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.subconatiner1}>
                <Image source={require('../../assets/Images/map.png')} style={styles.map} />
            </View>
            <View style={styles.subcontainer2}>
                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <TouchableOpacity style={styles.vectorbtn}>
                        <Image source={require('../../assets/Images/car.png')} />
                        <Text style={styles.vectorText}>Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vectorbtn}>
                        <Image source={require('../../assets/Images/scooter.png')} />
                        <Text style={styles.vectorText}>Scooter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vectorbtn}>
                        <Image source={require('../../assets/Images/bike.png')} />
                        <Text style={styles.vectorText}>Bike</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 3 }}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data1}
                        search
                        maxHeight={300}
                        labelField="label1"
                        valueField="value"
                        placeholder="Source"
                        searchPlaceholder="Search Sourcce."
                        value={value}
                        itemTextStyle={{color: 'black'}}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons style={styles.icon} color="black" name="source-commit-start" size={20} />
                        )}

                    />
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data2}
                        search
                        maxHeight={300}
                        labelField="label2"
                        valueField="value"
                        placeholder="Destination"
                        searchPlaceholder="Search Destination."
                        value={value}
                        itemTextStyle={{color: 'black'}}
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons style={styles.icon} color="black" name="source-commit-end" size={20} />
                            
                            )}
                            
                            />
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data3}
                        search
                        maxHeight={300}
                        labelField="label3"
                        valueField="value"
                        placeholder="Ride Time"
                        searchPlaceholder="Search Ride Time."
                        value={value}
                        itemTextStyle={{color: 'black'}}
                        dropdownPosition='top'
                        onChange={item => {
                            setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons style={styles.icon} color="black" name="clock-time-nine-outline" size={20} />
                        )}

                    />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
                        <Text style={styles.btnText}>Find Driver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    subconatiner1: {
        flex: 4.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: 415,
        height: 505,
    },
    subcontainer2: {
        flex: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,

    },
    vectorbtn: {
        width: 85,
        marginTop: 15,
        height: 85,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOpacity: 0.9,
        elevation: 10,
        shadowRadius: 20,
    },
    vectorText: {
        color: '#0D0F17',
        fontFamily: 'Poppins-Black',
        fontSize: 12,

    },
    dropdown: {
        margin: 13,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        color: '#898989',

    },
    icon: {
        marginRight: 5,
        color: '#898989',

    },
    placeholderStyle: {
        fontSize: 16,
        color: '#898989',

    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#0D0F17',
    },
    iconStyle: {
        width: 20,
        height: 20,


    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: '#0D0F17',


    },
    button: {
        backgroundColor: '#194AF9',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 90,
        marginHorizontal: 30,
        marginTop: 12,

    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 800,
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },
})
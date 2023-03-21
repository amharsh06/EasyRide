import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Extra() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const data1 = [

        { label1: 'Male', value: '1' },
        { label1: 'Female', value: '2' },

    ];// keyboardType = 'numeric'

    const [value, setValue] = useState(null);
    return (
        < >
            <View style={styles.container}>
                <View style={styles.subcontainer1}>
                    <Text style={styles.text}>Driver Information</Text>
                </View>
                <View>
                    <TextInput placeholder='First Name' placeholderTextColor={'#898989'} style={styles.textname} />

                    <TextInput placeholder='Last Name' placeholderTextColor={'#898989'} style={styles.textname} />


                    <TouchableOpacity onPress={() => setOpen(true)} >
                        <Text style={styles.textnamee} >DOB</Text>
                    </TouchableOpacity>
                    <DatePicker
                        mode="date"
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }} />

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
                        placeholder="Gender"
                        value={value}
                        itemTextStyle={{ color: 'black' }}
                        onChange={item => {
                            setValue(item.value);
                        }}


                    />
                    <TextInput placeholder='Aadhar Number' keyboardType='numeric' placeholderTextColor={'#898989'} style={styles.textname} />
                    <TextInput placeholder='Drvier Licence Number' keyboardType='numeric' placeholderTextColor={'#898989'} style={styles.textname} />

                    <TouchableOpacity onPress={() => setOpen(true)} >
                        <Text style={styles.textnamee} >DL Expire Date</Text>
                    </TouchableOpacity>
                    <DatePicker
                        mode="date"
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }} />
                    <TextInput placeholder='Vehical Number' keyboardType='numeric' placeholderTextColor={'#898989'} style={styles.textname} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
                </View>



            </View>

        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white',
    },
    dropdown: {
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: '#898989',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,

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
    subcontainer1: {
        alignItems: 'center',
        margin: 30,
    },
    text: {
        color: '#0D0F17',
        fontSize: 22,
        fontFamily: 'Semibold'

    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 800,
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },
    textname: {
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#898989',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    textnamee: {
        color: '#868686',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#898989',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#194AF9',
        marginHorizontal: 25,
        marginTop: 100,
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 90,
        marginHorizontal: 15,
    },
    boxtext: {
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        borderColor: '#B6B6B6',
        marginTop: 20,
        padding: 10,
        color: '#898989',
    }
})
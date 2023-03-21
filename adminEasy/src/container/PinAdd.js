import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, FaqActionAdd, postData, putData } from '../ redux/action/Faq.Action'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { PinDataAdd, PinDataDelete, PinDataUpdate, PinGetData } from '../ redux/action/Pin.action'



export default function PinAdd() {
    const dispatch = useDispatch()
    const pindata = useSelector(state => state.PinData)
    const [id, setId] = useState()
    const [pincode, setPincode] = useState()
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        dispatch(PinGetData())
    }, [])
    const addData = () => {
        let data = {
            // id: id,
            pincode: pincode,
        }
        // console.log(data)
        dispatch(PinDataAdd(data))
    }
    const handleDelete = (id) => {
        dispatch(PinDataDelete(id))
    }

    const handleUpdate = (item) => {
        setId(item.id)
        setPincode(item.pincode)
        setUpdate(true)
    }
    const updateData = () => {
        let upData = {
            id: id,
            pincode: pincode,
        }
        dispatch(PinDataUpdate(upData))
    }
    const clear = () => {

        setPincode('')
        setUpdate(false)

    }
    return (
        <View style={styles.full}>
            <ScrollView>
                <View style={styles.conatiner}>
                    <View style={styles.conatiner1}>

                        <TextInput placeholder='Pincode' value={pincode} onChangeText={setPincode} placeholderTextColor={'black'} keyboardType='numeric' maxLength={6}   style={styles.TextInput} />

                    </View>
                    <View style={styles.conatiner2}>

                        <TouchableOpacity style={styles.button} onPress={update ? updateData : addData}>

                            <Text>ADD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={clear}>
                            <Text>Clear</Text>
                        </TouchableOpacity>
                        {
                            pindata.pin.map((item, index) => {
                                return (
                                    <>
                                        <View style={styles.con}>
                                            <View style={styles.con1}>
                                                <Text style={styles.txt2}>{item.id}</Text>
                                                <Text style={styles.text}><Text style={styles.txt2}>Pincode:--</Text>{item.pincode}
                                                    <MaterialCommunityIcons name="delete" size={25} onPress={() => { handleDelete(item.id) }} />
                                                    <MaterialIcons name="edit" size={25} onPress={() => handleUpdate(item)} /></Text>
                                            </View>
                                        </View>

                                    </>
                                )

                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}




const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'white'
    },
    conatiner: {
        // flex: 1,
        // backgroundColor: 'red',
    },
    conatiner1: {

    },
    conatiner2: {
        // flex: 2,

        alignItems: 'center'

    },
    TextInput: {
        borderColor: '#777',
        borderWidth: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
        padding: 15,
        color: 'black'
    },
    txt2: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
    },
    button: {
        backgroundColor: '#194AF9',
        width: '50%',
        borderRadius: 15,
        paddingHorizontal: 40,
        paddingVertical: 20,
        alignItems: 'center',
        margin: 10,
    },
    text: {
        color: 'black'
    },
    con: {
        alignItems: 'center',
    },
    con1: {
        backgroundColor: 'white',
        height: 150,
        width: 330,
        marginTop: '5%',

        borderRadius: 10,
        borderRadius: 10,
        elevation: 10,
    },
})
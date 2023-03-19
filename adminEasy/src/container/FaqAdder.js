import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, FaqActionAdd, postData, putData } from '../ redux/action/Faq.Action'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function FaqAdder() {
    const dispatch = useDispatch()
    const postdata = useSelector(state => state.FaqReducer)
    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        dispatch(FaqActionAdd())
    }, [])
    const addData = () => {
        let data = {
            id: id,
            title: title,
            body: description,
        }
        // console.log(data)
        dispatch(postData(data))
    }
    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    const handleUpdate = (item) => {
        setId(item.id.toString())
        setTitle(item.title)
        setDescription(item.body)
        setUpdate(true)
    }
    const updateData = () => {
        let upData = {
            id: parseInt(id),
            title: title,
            body: description,
        }
        dispatch(putData(upData))
    }
    // console.log(postdata)
    return (
        <View style={styles.full}>
            <ScrollView>
                <View style={styles.conatiner}>
                    <View style={styles.conatiner1}>
                        <TextInput placeholder='ID' value={id} onChangeText={setId} placeholderTextColor={'black'} style={styles.TextInput} />
                        <TextInput placeholder='Title' value={title} onChangeText={setTitle} placeholderTextColor={'black'} style={styles.TextInput} />
                        <TextInput placeholder='Description' value={description} onChangeText={setDescription} placeholderTextColor={'black'} style={styles.TextInput} />
                    </View>
                    <View style={styles.conatiner2}>

                        <TouchableOpacity style={styles.button} onPress={update ? updateData : addData}>
                            <Text>ADD</Text>
                        </TouchableOpacity>

                        {
                            postdata.post.map((item, index) => {
                                return (
                                    <>
                                        <View style={styles.con}>
                                            <View style={styles.con1}>
                                                <Text style={styles.txt2}>{item.id}</Text>
                                                <Text style={styles.text}><Text style={styles.txt2}>Title:--</Text>{item.title}</Text>
                                                <Text style={styles.text}><Text style={styles.txt2}>Description:--</Text>{item.body}
                                                    <MaterialCommunityIcons name="delete" size={25} onPress={() => { handleDelete(item.id) }} />
                                                    <MaterialIcons name="edit" size={20} onPress={() => handleUpdate(item)} /></Text>
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
        alignItems: 'center'
    },
    text: {
        color: 'black'
    },
    con: {
        alignItems: 'center',
    },
    con1: {
        backgroundColor: 'white',
        height: 250,
        width: 330,
        marginTop: '5%',
        borderRadius: 10,
        borderRadius: 10,
        elevation: 10,
    },
})
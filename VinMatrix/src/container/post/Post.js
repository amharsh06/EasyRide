import { View, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, GetActionData } from '../../redux/action/post.action'

export default function Post() {
    const dispatch = useDispatch()
    const postData = useSelector(state => state.postDig)
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [msg, setMsg] = useState('');


    useEffect(() => {
        dispatch(GetActionData())
    }, [])

    const addPost = () => {
        let data = {
            id,
            title,
            userId,
            msg,
        }
        dispatch(AddData(data))
    }

    return (

        <SafeAreaView>
            <ScrollView>
                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={id}
                    placeholder="Enter Id"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="Enter Title"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setUserId}
                    value={userId}
                    placeholder="Enter User ID"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setMsg}
                    value={msg}
                    placeholder="Enter Your Message"
                />

                <TouchableOpacity style={styles.button} onPress={addPost}>
                    <Text>Press Here</Text>
                </TouchableOpacity>

                <View>
                    {postData.post.map((d, i) => {

                        return <Text>{d.title}</Text>
                    })}
                </View>

            </ScrollView >
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetActionData } from '../../redux/action/post.action'

export default function Post() {
    const dispatch = useDispatch()
    const postData = useSelector(state => state.postDig)
    useEffect(() => {
        dispatch(GetActionData())
    }, [])
    // console.log(postData);
    return (
        <View>
            {postData.post.map((d, i) => {
               
                return  <Text>{d.id}</Text>
            })}
        </View>
    )
}
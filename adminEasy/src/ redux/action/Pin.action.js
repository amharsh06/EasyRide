import * as ActionType from '../ActionType'

import firestore from '@react-native-firebase/firestore';

export const PinGetData = () => async (dispatch) => {

    try {

        let data = []
        await firestore()
            .collection('Pincode')
            .get()
            .then(querySnapshot => {
                // console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        dispatch({ type: ActionType.GET_DATA, payload: data })
    } catch (error) {

    }
}


export const PinDataAdd = (data) => (dispatch) => {
    console.log(data);
    try {


        firestore()
            .collection('Pincode')
            .add(data)
            .then((doc) => {

                dispatch({ type: ActionType.POST_DATA, payload: { id: doc.id, ...data } })
            });
    } catch (error) {

    }
}

export const PinDataDelete = (id) => (dispatch) => {
    try {

        console.log(id);

        firestore()
            .collection('Pincode')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: ActionType.DELETE_DATA, payload: id });
            });

    } catch (error) {

    }
}

export const PinDataUpdate = (upData) => (dispatch) => {
    try {

        firestore()
            .collection('Pincode')
            .doc(upData.id)
            .update(upData)
            .then(() => {
                dispatch({ type: ActionType.PUT_DATA, payload: upData })
            });


    } catch (error) {

    }
}
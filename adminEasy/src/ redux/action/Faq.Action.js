import * as ActionType from '../ActionType'

import firestore from '@react-native-firebase/firestore';

export const FaqActionAdd = () => async (dispatch) => {

    try {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data }));
        let data = []
        await firestore()
            .collection('Post')
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


export const postData = (data) => (dispatch) => {
    // console.log(data);
    try {
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.POST_DATA, payload: data }))
        //     .catch((error) => { console.error("Error:", error); });

        firestore()
            .collection('Post')
            .add(data)
            .then((doc) => {
                // console.log(doc.id);
                dispatch({ type: ActionType.POST_DATA, payload: { id: doc.id, ...data } })
            });
    } catch (error) {

    }
}

export const deleteData = (id) => (dispatch) => {
    try {
        // fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        //     method: "DELETE",
        // })
        //     .then(dispatch({ type: ActionType.DELETE_DATA, payload: id }));
        console.log(id);

        firestore()
            .collection('Post')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: ActionType.DELETE_DATA, payload: id });
            });

    } catch (error) {

    }
}

export const putData = (upData) => (dispatch) => {
    try {
        // fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(upData),
        // })
        //     .then((response) => response.json())
        //     .then((upData) => dispatch({ type: ActionType.PUT_DATA, payload: upData }))
        //     .catch((error) => { console.error("Error:", error); });
        // // console.log(upData);
        firestore()
            .collection('Post')
            .doc(upData.id)
            .update(upData)
            .then(() => {
                dispatch({ type: ActionType.PUT_DATA, payload: upData })
            });


    } catch (error) {

    }
}
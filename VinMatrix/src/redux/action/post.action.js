import * as ActionType from '../ActionType';


export const GetActionData = () => (dispatch) => {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data }));
    } catch (error) {
        console.log(error)
    }

}

export const AddData = (data) => (dispatch) => {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.POST_DATA, payload: data}))
            .catch((error) => {console.error("Error:", error);})

    } catch (error) {

    }
}
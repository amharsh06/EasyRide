import * as ActionType from '../ActionType';


export const GetActionData = () => (dispatch) => {
    try{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => dispatch({type:ActionType.GET_DATA,payload:data}));
    } catch(error){
        console.log(error)
    }

}
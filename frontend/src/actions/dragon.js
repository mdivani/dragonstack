import { DRAGON } from "./types";

export const fetchDragon = () => (dispatch) => {
    dispatch({type: DRAGON.FETCH});
    return fetch("http://localhost:3001/dragon/new")
    .then((response) => response.json())
    .then((data) => {
        if (data.type === "error") {
            dispatch({type: DRAGON.FETCH_ERROR, message: data.message});
        } else {
            dispatch({type: DRAGON.FETCH_SUCCESS, dragon: data.dragon});
        }
    })
    .catch((error) => dispatch({type: DRAGON.FETCH_ERROR, message: error.message }));
}
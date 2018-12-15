import { GENERATION } from "./types";

export const fetchGeneration = () => {
    return (dispatch) => {
        dispatch({type: GENERATION.FETCH});
        return fetch("http://localhost:3001/generation")
               .then((response) => response.json())
               .then((json) => {
                   if (json.type === "error") {
                       dispatch({
                           type: GENERATION.FETCH_ERROR,
                           message: json.message
                       });
                       return new Date().getTime();
                   } else {
                       dispatch({
                           type: GENERATION.FETCH_SUCCESS,
                           generation: json.generation
                       });

                       return json.generation.expiration;
                   }
               }).catch((error) => dispatch({type: GENERATION.FETCH_ERROR, message: error.message}));
    }
}
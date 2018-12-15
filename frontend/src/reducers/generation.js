import { GENERATION } from "../actions/types";
import fetchState from "./fetchState";
const DEFAULT_GENERATION = { generationId: "", expiration: ""};

export default (state = DEFAULT_GENERATION, action) => {

    switch(action.type) {
        case GENERATION.FETCH:
            return {...state, status: fetchState.fetching};
        case GENERATION.FETCH_ERROR:
            return { ...state, status: fetchState.error, message: action.message };
        case GENERATION.FETCH_SUCCESS: 
            return {...action.generation, status: fetchState.success};
        default:
            return state;
    }
}
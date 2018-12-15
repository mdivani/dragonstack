import { GENERATION } from "../actions/types";
const DEFAULT_GENERATION = { generationId: "", expiration: ""};

export const generationReducer = (state = DEFAULT_GENERATION, action) => {

    switch(action.type) {
        case GENERATION.FETCH_SUCCESS: 
            return action.generation;
        default:
            return state;
    }
}
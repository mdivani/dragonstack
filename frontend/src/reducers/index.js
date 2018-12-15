import { GENERATION_ACTION_TYPE } from "../actions/types";
const DEFAULT_GENERATION = { generationId: "", expiration: ""};

export const generationReducer = (state = {generation: DEFAULT_GENERATION}, action) => {

    switch(action.type) {
        case GENERATION_ACTION_TYPE: 
            return {generation: action.generation};
        default:
            return state;
    }
}
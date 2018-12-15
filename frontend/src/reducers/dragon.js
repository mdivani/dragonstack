import { DRAGON } from "../actions/types";
import fetchState from "./fetchState";

const DEFAULT_DRAGON = {
    dragonId: "",
    generationId: "",
    nickname: "",
    birthdate: "",
    traits: []

}

export default (state = DEFAULT_DRAGON, action) => {
    switch(action.type) {
        case DRAGON.FETCH: 
            return {...state, status: fetchState.fetching};
        case DRAGON.FETCH_ERROR:
            return {...state, status: fetchState.error, message: action.message};
        case DRAGON.FETCH_SUCCESS:
            return {...action.dragon, status: fetchState.success}
        default: 
            return state;
    }
}
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { generationReducer, dragonReducer } from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
      combineReducers({
        generation: generationReducer,
        dragon: dragonReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };
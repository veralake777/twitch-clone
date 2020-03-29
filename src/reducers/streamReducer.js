/*
ARRAY BASED APPROACH
const streamReducer = (state=[], action) => {
    switch (action.type) {
        case EDIT_STREAM:
            return state.map(stream => {
                if (stream.id === action.payload.id) {
                    return action.payload;
                } else {
                    return stream;
                }
            })
        default:
          return state;
    }
}

OBJECT-BASED APPROACH
const streamReducer = (state={}, action) => {
    switch (action.type) {
        case EDIT_STREAM:
            // ...state takes all the key:value pairs from state object
            // const newState = { ...state};
            // newState[action.payload.id] = action.payload;
            // return newState;

            // ES6 syntax sugar
                            // key interperlation - use when you don't know what the key will be
                            // selected stream's [key]: value added to the state object
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}
*/

/* FINAL APPROACH */
import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    CREATE_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            //_ is lodash command
            // because the payload in the action creator is the id only use action.payload NOT action.payload.id
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return {...state}
        default:
            return state;
    }
};
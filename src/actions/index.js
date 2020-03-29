import streams from '../apis/streams';
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    };
};

/*
use axios async/await for dispatching CRUD actions
BEFORE CODING: create table with information
Action           | Method | Route        | Response
-----------------|--------|--------------|-----------------
list all records | GET    | /streams     | Array of records
get one record   | GET    | /streams/:id | Single record
create record    | POST   | /streams     | Single record
update record    | PUT    | /streams/:id | Single record
Delete record    | DELETE | /streams/:id | Nothing
*/
export const createStream = formValues => async dispatch => { 
    const response = await streams.post('/streams', formValues)

    dispatch({ type: CREATE_STREAM, payload: response.data})
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({type: FETCH_STREAM, payload: response.data })
}

export const editStream = ( id, formValues ) => async dispatch => {
    //put(<what to put>, <what to change>)
    const response = await streams.put(`/streams/${id}`, formValues)

    dispatch({type: EDIT_STREAM, payload: response.data })
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`streams/${id}`);

    dispatch({type: DELETE_STREAM, payload: id})
}
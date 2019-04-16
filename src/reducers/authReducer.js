import { SIGN_IN, SIGN_OUT } from '../actions/types';
import { bindActionCreators } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';


// prevents undefined state
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};
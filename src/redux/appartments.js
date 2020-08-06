import * as ActionTypes from './ActionTypes';

export const Appartments = (state = {
        isLoading: true,
        errMess: null,
        appartments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_APPARTMENT:
            return {...state, isLoading: false, errMess: null, appartments: action.payload};

        case ActionTypes.APPARTMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, appartments: []};

        case ActionTypes.APPARTMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, appartments: []};

        default:
            return state;
    }
}

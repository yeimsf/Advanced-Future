import * as ActionTypes from './ActionTypes';

export const Appartments = (state = {
        isLoading: true,
        errMess: null,
        appartments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_REQUEST:
            return {...state , isLoading: true , isAuthenticated: true , appartments: action.payload };
        case ActionTypes.ADD_APPARTMENTS:
            return {...state, isLoading: false, errMess: null, appartments: action.payload};

        case ActionTypes.APPARTMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, appartments: []};

        case ActionTypes.APPARTMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, appartments: []};

        default:
            return state;
    }
}

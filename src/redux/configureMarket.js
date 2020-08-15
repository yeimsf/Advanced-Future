import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Appartments } from './appartments';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureMarket = () => {
    const market = createStore(
        combineReducers({
            appartments: Appartments,
            auth: Auth
        }),
        applyMiddleware(thunk, logger)
    );

    return market;
}

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import { Appartments } from './appartments';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureMarket = () => {
    const market = createStore(
        combineReducers({
            appartments: Appartments,
            auth: Auth,
        }),
        applyMiddleware(thunk, logger)
    );

    return market;
}

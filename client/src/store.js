//dependencies
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

//reducers
import EventsReducer from './reducers/events_reducer';
import EventsFormData from './reducers/eventFormData';
import Errors from './reducers/errors_reducer';

const reducers = combineReducers({
    events: EventsReducer,
    form: EventsFormData,
    errors: Errors
});

// const middleware = [thunk]

export default createStore(
    reducers,
    applyMiddleware(thunk)
)
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import ContactReducer from './modules/contact/ContactReducers'
import UserReducers from './modules/user/UserReducers';

const rootReducer = combineReducers({
    contact: ContactReducer,
    user: UserReducers
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store
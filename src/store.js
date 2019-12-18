import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import contactReducer from './modules/contact/reducers'

const rootReducer = combineReducers({
    contact: contactReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store
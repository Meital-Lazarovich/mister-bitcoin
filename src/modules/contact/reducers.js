const INITIAL_STATE = {
    currContact: null,
    contacts: []
}

export default function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURR_CONTACT':
            return {
                ...state,
                currContact: action.contact
            }
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        default:
            return state
    }
}
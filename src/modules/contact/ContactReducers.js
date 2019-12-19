const INITIAL_STATE = {
    currContact: null,
    contacts: []
}

var idx;

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
        case 'SAVE_CONTACT':
            idx = state.contacts.findIndex(contact => {
                return contact._id === action.contact._id
            })
            return {
                ...state,
                contacts: [
                    ...state.contacts.slice(0, idx),
                    action.contact,
                    ...state.contacts.slice(idx + 1)
                ]
            }
        case 'DELETE_CONTACT':
            idx = state.contacts.findIndex(contact => {
                return contact._id === action.id
            })
            return {
                ...state,
                contacts: [
                    ...state.contacts.slice(0, idx),
                    ...state.contacts.slice(idx + 1)
                ]
            }
        default:
            return state
    }
}
import ContactService from './ContactService'

const setCurrContact = (contact) => {
    return { type: 'SET_CURR_CONTACT', contact }
}

export const loadCurrContact = (id) => {
    return async (dispatch) => {
        const contact = await ContactService.getContactById(id)
        return dispatch(setCurrContact(contact))
    }
}

const setContacts = (contacts) => {
    return { type: 'SET_CONTACTS', contacts }
}

export const loadContacts = (filter) => {
    return async (dispatch) => {
        const contacts = await ContactService.getContacts(filter)
        return dispatch(setContacts(contacts))
    }
}

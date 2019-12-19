import ContactService from './ContactService'

export const loadCurrContact = (id) => {
    return async (dispatch) => {
        const contact = await ContactService.getContactById(id)
        return dispatch(setCurrContact(contact))
    }
}

const setCurrContact = (contact) => {
    return { type: 'SET_CURR_CONTACT', contact }
}

export const loadContacts = (filter) => {
    return async (dispatch) => {
        const contacts = await ContactService.getContacts(filter)
        return dispatch(setContacts(contacts))
    }
}

const setContacts = (contacts) => {
    return { type: 'SET_CONTACTS', contacts }
}

export const saveContact = (contact) => {
    return async (dispatch) => {
        const savedContact = await ContactService.saveContact(contact)
        return dispatch(setSaveContact(savedContact))
    }
}

const setSaveContact = (contact) => {
    return { type: 'SAVE_CONTACT', contact }
}

export const removeContact = (id) => {
    return async (dispatch) => {
        await ContactService.removeContact(id)
        return dispatch(setRemoveContact(id))
    }
}

const setRemoveContact = (id) => {
    return { type: 'DELETE_CONTACT', id }
}

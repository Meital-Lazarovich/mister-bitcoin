import React from 'react';

import ContactService from '../services/ContactService'
import ContactList from '../cmps/ContactList'

export default class ContactPage extends React.Component {
    state = {
        contacts: []
    }
    render() {
        const { contacts } = this.state
        if (contacts) return <ContactList contacts={contacts}></ContactList>
        else return <div>no contacts</div>
    }
    async componentDidMount() {
        const contacts = await ContactService.getContacts()
        this.setState({ contacts })
    }
}
import React from 'react';

import ContactService from '../services/ContactService'
import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter';
import {Link} from 'react-router-dom'

export default class ContactPage extends React.Component {
    state = {
        contacts: [],
    }

    handleFilter = async (val) => {
        const filter = {term: val}
        const contacts = await ContactService.getContacts(filter)
        this.setState({ contacts })
    }

    render() {
        const { contacts } = this.state
        if (contacts) return (
            <section className="contact-page flex-center column">
                <ContactFilter handleFilter={this.handleFilter}></ContactFilter>
                <Link to={'/contact/edit'}>Add new contact</Link>
                <ContactList contacts={contacts}></ContactList>
            </section>
        )
        else return <div>no contacts</div>
    }
    async componentDidMount() {
        const contacts = await ContactService.getContacts()
        this.setState({ contacts })
    }
}
import React from 'react';
import {Link} from 'react-router-dom';

import ContactService from '../services/ContactService';

export default class ContactDetails extends React.Component {
    state = {
        contact: null
    }
    render() {
        const { contact } = this.state
        if (contact) return (
            <section className="contact-details">
                <div className="nav">
                    <Link to={'/contact'}>Back</Link>
                    <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                </div>
                <h3>Name: {contact.name}</h3>
                <h3>Phone: {contact.phone}</h3>
                <h3>Email: {contact.email}</h3>
            </section>
        )
        else return <h1>Unknown contact</h1>
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const contact = await ContactService.getContactById(id)
        this.setState({ contact })
    }
}
import React from 'react';
import ContactService from '../services/ContactService';

export default class ContactEdit extends React.Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }

    updateContact = (ev, field) => {
        const { value } = ev.target;
        this.setState(prevState => {
            return {
                contact: {
                    ...prevState.contact,
                    [field]: value
                }
            }
        })
    }

    saveContact = async ev => {
        ev.preventDefault()
        await ContactService.saveContact(this.state.contact)
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        return (
            <section className="contact-edit">
                <form onSubmit={this.saveContact} className="flex-center column">
                    <label> Name:
                        <input type="text" value={contact.name} onChange={ev => this.updateContact(ev, 'name')} />
                    </label>
                    <label> Phone:
                        <input type="text" value={contact.phone} onChange={ev => this.updateContact(ev, 'phone')} />
                    </label>
                    <label> Email:
                        <input type="email" value={contact.email} onChange={ev => this.updateContact(ev, 'email')} />
                    </label>
                    <button type="submit">Done</button>
                </form>
            </section>
        )
    }
    async componentDidMount() {
        const id = this.props.match.params.id
        if (id) {
            const contact = await ContactService.getContactById(id)
            this.setState({ contact })
        }
    }
}
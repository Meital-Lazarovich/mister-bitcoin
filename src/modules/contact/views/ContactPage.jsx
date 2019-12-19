import React from 'react';
import { Link } from 'react-router-dom'
import { loadContacts } from '../ContactActions';
import { loadUser } from '../../user/UserActions'
import { connect } from 'react-redux';

import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter';

class ContactPage extends React.Component {
    handleFilter = async val => {
        const filter = { term: val }
        this.props.loadContacts(filter)
    }

    componentDidMount() {
        this.props.loadUser()
        if (!this.props.user) {
            this.props.history.push('/signup')
            return
        }
        this.props.loadContacts()
    }

    render() {
        const { contacts } = this.props
        if (contacts) return (
            <section className="contact-page flex-center column">
                <ContactFilter handleFilter={this.handleFilter}></ContactFilter>
                <Link to={'/contact/edit'}>Add new contact</Link>
                <ContactList contacts={contacts}></ContactList>
            </section>
        )
        else return <div>no contacts</div>
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contact.contacts,
        user: state.user.user
    }
}

const mapDispatchToProps = {
    loadContacts,
    loadUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)
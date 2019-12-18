import React from 'react';
import {Link} from 'react-router-dom';
import {loadCurrContact} from '../actions';
import {connect} from 'react-redux'

class ContactDetails extends React.Component {
    async componentDidMount() {
        const { id } = this.props.match.params
        this.props.loadCurrContact(id)
    }
    render() {
        const { contact } = this.props
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
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadCurrContact
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails)
import React from 'react';
import { Link } from 'react-router-dom';
import { loadCurrContact } from '../ContactActions';
import { loadUser, addMove } from '../../user/UserActions'
import { connect } from 'react-redux';
import TransferFund from '../cmps/TransferFund';
import MoveList from '../cmps/MoveList';

class ContactDetails extends React.Component {
    state = {
        amount: null,
        movesToContact: []
    }

    async componentDidMount() {
        await this.props.loadUser()
        if (!this.props.user) {
            this.props.history.push('/signup')
            return
        }
        const { id } = this.props.match.params
        await this.props.loadCurrContact(id)
        this.getMovesToContact()
    }

    updateAmount = (ev) => {
        const { value } = ev.target
        this.setState({ amount: value })
    }

    addMove = (ev) => {
        ev.preventDefault()
        const { contact } = this.props
        const { amount } = this.state
        this.props.addMove(contact, amount)
        this.getMovesToContact()
    }

    getMovesToContact = () => {
        const { moves } = this.props.user
        const { contact } = this.props
        if (!moves || !moves.length) return
        const movesToContact = moves.filter(move => move.toId === contact._id)
        this.setState({ movesToContact })
    }

    render() {
        const { contact } = this.props
        const { movesToContact } = this.state
        if (contact) return (
            <section className="contact-details container">
                <div className="nav flex space-between align-center">
                    <Link className="back hover-link" to={'/contact'}>Back</Link>
                    <Link className="link-edit hover-link" to={`/contact/edit/${contact._id}`}>Edit Contact Details</Link>
                </div>
                <div className="flex info space-between align-center">
                    <img className="contact-img" src={contact.img} alt="" />
                    <div>
                        <h3>Name: {contact.name}</h3>
                        <h3>Phone: {contact.phone}</h3>
                        <h3>Email: {contact.email}</h3>
                    </div>
                </div>
                <TransferFund contact={contact} addMove={this.addMove} updateAmount={this.updateAmount} />
                <MoveList moves={movesToContact} title={'Your Moves'} />
            </section>
        )
        else return <h1>Unknown contact</h1>
    }
}

const mapStateToProps = state => {
    return {
        contact: state.contact.currContact,
        user: state.user.user
    }
}

const mapDispatchToProps = {
    loadCurrContact,
    loadUser,
    addMove
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails)
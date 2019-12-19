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
        this.setState({movesToContact})
    }

    render() {
        const { contact } = this.props
        const { movesToContact } = this.state
        if (contact) return (
            <section className="contact-details">
                <div className="nav">
                    <Link to={'/contact'}>Back</Link>
                    <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                </div>
                <h3>Name: {contact.name}</h3>
                <h3>Phone: {contact.phone}</h3>
                <h3>Email: {contact.email}</h3>
                <TransferFund contact={contact} addMove={this.addMove} updateAmount={this.updateAmount}></TransferFund>
                <MoveList moves={movesToContact} title={'Your Moves'}></MoveList>
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
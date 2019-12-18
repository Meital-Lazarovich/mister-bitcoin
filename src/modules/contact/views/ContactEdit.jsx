import React from 'react';
import {Link} from 'react-router-dom';
import {loadCurrContact, saveContact, deleteContact} from '../actions';
import {connect} from 'react-redux'

class ContactEdit extends React.Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        },
        isNew: true
    }
    
    async componentDidMount() {
        const id = this.props.match.params.id
        if (id) {
            this.props.loadCurrContact(id)
            this.setState({contact: this.props.contact, isNew: false})
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
        await this.props.saveContact(this.state.contact)
        this.goToContactPage()
    }

    deleteContact = async () => {
        await this.props.deleteContact(this.state.contact._id)
        this.goToContactPage()
    }

    goToContactPage = () => {
        this.props.history.push('/contact')
    }

    render() {
        const { contact, isNew } = this.state
        return (
            <section className="contact-edit">
                <div className="actions">
                    <Link to={`/contact/${contact._id}`}>Back</Link>
                    {!isNew && <button onClick={this.deleteContact}>Delete</button>}
                </div>
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
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadCurrContact,
    saveContact,
    deleteContact
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEdit)
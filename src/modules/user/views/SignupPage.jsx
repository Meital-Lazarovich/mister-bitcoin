import React from 'react'
import { connect } from 'react-redux'
import { signup, loadUser } from '../UserActions'

class SignupPage extends React.Component {
    state = {
        userName: null
    }

    componentDidMount() {
        this.props.loadUser()
        if (this.props.user) this.goToHomePage()
    }

    updateName = ev => {
        const { value } = ev.target
        this.setState({ userName: value })
    }

    signup = ev => {
        ev.preventDefault();
        this.props.signup(this.state.userName)
        this.goToHomePage()
    }

    goToHomePage = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <section className="signup-page container flex align-center column">
                <h3>Please type your name to continue</h3>
                <form onSubmit={this.signup}>
                    <input type="text" onChange={this.updateName} />
                    <button>Submit</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    signup,
    loadUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupPage)
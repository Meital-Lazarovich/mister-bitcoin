import React from 'react'
import BitcoinService from '../services/BitcoinService'
import { loadUser } from '../../user/UserActions'
import { connect } from 'react-redux'
import MoveList from '../../contact/cmps/MoveList'


class HomePage extends React.Component {
    state = {
        rate: null
    }

    async componentDidMount() {
        this.props.loadUser()
        const {user} = this.props
        if (!user) {
            this.props.history.push('/signup')
            return
        }
        const rate = await BitcoinService.getRate(user.coins);
        this.setState({ rate })
    }

    render() {
        const { rate } = this.state
        const { user } = this.props
        if (user) return (
            <section className="home-page">
                <h1>Hello, {user.name}</h1>
                <h2>Current Balance:</h2>
                <h3>Bit: ₿ {user.coins}</h3>
                <h3>USD: $ {rate}</h3>
                <MoveList title={'Your Last Moves'} moves={user.moves.slice(0, 3)}></MoveList>
            </section>
        )
        else return <div>Something went wrong...</div>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    loadUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)
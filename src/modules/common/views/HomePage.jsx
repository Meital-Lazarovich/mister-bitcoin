import React from 'react'
import BitcoinService from '../services/BitcoinService'
import { loadUser } from '../../user/UserActions'
import { connect } from 'react-redux'


class HomePage extends React.Component {
    state = {
        rate: null
    }

    async componentDidMount() {
        this.props.loadUser()
        if (!this.props.user) {
            this.props.history.push('/signup')
            return
        }
        const rate = await BitcoinService.getRate(1);
        this.setState({ rate })
    }

    render() {
        const { rate } = this.state
        const { user } = this.props
        if (user) return (
            <section className="home-page">
                <h1>Hello, {user.name}</h1>
                <h3>Coins: {user.coins}</h3>
                <h3>BTC: {rate}</h3>
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
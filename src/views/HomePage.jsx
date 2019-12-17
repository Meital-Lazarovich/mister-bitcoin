import React from 'react'
import UserService from '../services/UserService';
import BitcoinService from '../services/BitcoinService'


export default class HomePage extends React.Component {
    state = {
        user: null,
        rate: null
    }
    render() {
        const { user, rate } = this.state
        if (rate && user) return (
            <section className="home-page">
                <h1>Hello, {user.name}</h1>
                <h3>Coins: {user.coins}</h3>
                <h3>BTC: {rate}</h3>
            </section>
        )
        else return (
            <div></div>
        )
    }
    async componentDidMount() {
        const rate = await BitcoinService.getRate(1);
        const user = UserService.getUser();
        this.setState({ user, rate })
    }
}
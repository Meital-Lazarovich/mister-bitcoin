import Axios from "axios";

export default {
    getRate
}

async function getRate(coins) {
    const res = await Axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return res.data
}
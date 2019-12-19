import StorageService from '../common/services/StorageService';

const USER_KEY = 'user';
var user;

export default {
    getUser,
    signup,
    addMove
}

function getUser() {
    if (!user) user = StorageService.loadFromStorage(USER_KEY)
    return user
}

function signup(name) {
    user = {
        name,
        coins: 100,
        moves: []
    }
    StorageService.saveToStorage(USER_KEY, user)
    return user
}

function addMove(contact, amount) {
    if (!user) user = StorageService.loadFromStorage(USER_KEY)
    user.moves.unshift({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    })
    user.coins -= amount
    StorageService.saveToStorage(USER_KEY, user)
    return user
}
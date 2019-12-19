import UserService from './UserService'

export const signup = (name) => {
    return (dispatch) => {
        const user = UserService.signup(name)
        return dispatch(setUser(user))
    }
}

export const loadUser = () => {
    return (dispatch) => {
        const user = UserService.getUser()
        return dispatch(setUser(user))
    }
}

export const addMove = (contact, amount) => {
    return (dispatch) => {
        const user = UserService.addMove(contact, amount)
        return dispatch(setUser(user))
    }
}

const setUser = (user) => {
    return { type: 'SET_USER', user }
}

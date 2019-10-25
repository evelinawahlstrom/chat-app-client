export const ADD_MESSAGES = 'ADD_MESSAGES'
export const USER_LOGIN = 'USER_LOGIN'

export const addMessages = (payload) => ({
    type: 'ADD_MESSAGES',
    payload
})

export const login = (payload) => ({
    type: 'USER_LOGIN',
    payload
})
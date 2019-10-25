import { ADD_MESSAGES } from "../actions/actions";

const message = (state = [], action = {}) => {
    // good to have one console.log, that looks like this
    // before all of your switch statements
    // see what happens in my reducer (!!!)
    console.log("reducer", state, "action", action.type, "PL", action.payload)
    switch(action.type) {
        case ADD_MESSAGES:
            return action.payload
            // don't need to add the state, because of the 
            // stream db, that returns all messages
        default:
            return state 
    }
}

export default message 

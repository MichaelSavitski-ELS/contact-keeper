import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../Types';

const contactReducer = (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            console.log('I got called!');
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state;
    }
}

export default contactReducer;
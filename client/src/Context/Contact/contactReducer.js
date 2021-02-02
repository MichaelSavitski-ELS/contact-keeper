import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../Types';

const contactReducer = (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                currentContact: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                currentContact: null
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                filteredContacts: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email?.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filteredContacts: null
            }
        default:
            return state;
    }
}

export default contactReducer;
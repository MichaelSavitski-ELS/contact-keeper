import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../Types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: '1',
                name: 'One',
                email: 'one@one.com',
                type: 'personal'
            },
            {
                id: '2',
                name: 'Two',
                phone: "222-222-2222",
                type: 'professional'
            }
        ],
        currentContact: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    const setCurrentContact = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    const clearCurrentContact = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }

    // Filtert contacts

    // Clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                currentContact: state.currentContact,
                addContact,
                deleteContact,
                setCurrentContact,
                clearCurrentContact,
                updateContact
            }}>
            { props.children}
        </ContactContext.Provider>
    )

};

export default ContactState;
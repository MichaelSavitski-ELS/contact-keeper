import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, CONTACT_ERROR, GET_CONTACTS, CLEAR_CONTACTS } from '../Types';

const ContactState = props => {
    const initialState = {
        contacts: null,
        currentContact: null,
        filteredContacts: null,
        error: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    const getContacts = async () => {
        try {
            const res = await axios.get('api/contacts');

            dispatch({ type: GET_CONTACTS, payload: res.data });
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.msg });
        }
    }

    const addContact = async contact => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('api/contacts', contact, config);

            dispatch({ type: ADD_CONTACT, payload: res.data });
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error.msg });
        }
    }

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    const clearContacts = () => {
        dispatch({ type: CLEAR_CONTACTS });
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

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }

    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                currentContact: state.currentContact,
                filteredContacts: state.filteredContacts,
                error: state.error,
                addContact,
                deleteContact,
                setCurrentContact,
                clearCurrentContact,
                updateContact,
                filterContacts,
                clearFilter,
                getContacts,
                clearContacts
            }}>
            { props.children}
        </ContactContext.Provider>
    )

};

export default ContactState;
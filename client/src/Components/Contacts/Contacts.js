import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../Context/Contact/contactContext';
import Spinner from '../Layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filteredContacts, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>You have no contacts.</h4>
    }

    return (
        <Fragment>
            { contacts !== null && !loading ?
                <TransitionGroup>
                    {filteredContacts !== null ?
                        filteredContacts.map(contact => (
                            <CSSTransition key={contact._id} timeout={500} classNames="item">
                                <ContactItem key={contact.id} contact={contact} />
                            </CSSTransition>)) :
                        contacts.map(contact =>
                            <CSSTransition key={contact._id} timeout={500} classNames="item">
                                <ContactItem key={contact.id} contact={contact} />
                            </CSSTransition>)}
                </TransitionGroup> :
                <Spinner />}
        </Fragment>
    )
}

export default Contacts;

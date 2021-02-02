import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../Context/Contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filteredContacts } = contactContext;

    if (contacts.length === 0) {
        return <h4>You have no contacts.</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filteredContacts !== null ?
                    filteredContacts.map(contact => (
                        <CSSTransition key={contact.id} timeout={500} classNames="item">
                            <ContactItem key={contact.id} contact={contact} />
                        </CSSTransition>)) :
                    contacts.map(contact =>
                        <CSSTransition key={contact.id} timeout={500} classNames="item">
                            <ContactItem key={contact.id} contact={contact} />
                        </CSSTransition>)}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts;

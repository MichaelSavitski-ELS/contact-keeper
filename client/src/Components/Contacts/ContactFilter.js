import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../Context/Contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const text = useRef('');

    const { filterContacts, clearFilter } = contactContext;

    useEffect(() => {
        if (filterContacts === null) {
            text.current.value = '';
        }
    })

    const onChange = event => {
        if (text.current.value !== '') {
            filterContacts(event.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange} />
        </form>
    )
}

export default ContactFilter;

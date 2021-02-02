import React, { useState, useContext } from 'react'
import ContactContext from '../../Context/Contact/contactContext';

const ContactForm = () => {
    const contactConext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = event => setContact({
        ...contact,
        [event.target.name]: event.target.value
    });

    const onSubmit = event => {
        event.preventDefault();
        contactConext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}></input>
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}></input>
            <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}></input>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" id="personal" checked={type === 'personal'} onChange={onChange} />
            <label htmlFor="personal">Personal </label>
            <input type="radio" name="type" value="professional" id="professional" checked={type === 'professional'} onChange={onChange} />
            <label htmlFor="professional">Professional </label>
            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary btn-block"></input>
            </div>
        </form>
    )
}

export default ContactForm;
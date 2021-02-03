import React, { useState, useContext } from 'react'
import AlertContext from '../../Context/Alert/alertContext';

const Register = () => {
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = user;

    const onChange = event => setUser({ ...user, [event.target.name]: event.target.value });

    const onSubmit = event => {
        event.preventDefault();

        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else if (password.length < 6) {
            setAlert('Password must be at least six characters long', 'danger');
        } else {
            console.log('Register submit');
        }
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} onChange={onChange}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' name='email' value={email} onChange={onChange}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm password</label>
                    <input type='password' name='password2' value={password2} onChange={onChange}></input>
                </div>
                <input type='submit' className='btn btn-primary btn-block' value='Register' />
            </form>
        </div>
    )
}

export default Register;

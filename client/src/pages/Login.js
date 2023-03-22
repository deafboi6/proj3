import React, { useState } from 'react';
import './login.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
    event.preventDefault();
        try {
            const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
        });
            console.log(mutationResponse);
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='border mx-auto rounded bg-secondary mb-5'>
        <form onSubmit={handleFormSubmit} className="mx-auto w-50">
            <h2 className='text-white header2'>Login!</h2>
        <div className="form-contents mb-3">
            <input type="email" className="form-control" placeholder='Email' name='email' value={formState.email} aria-describedby="emailHelp" id='email' onChange={handleChange} />
        </div>
        <div className="form-contents mb-3">
            <input type="password" className="form-control" placeholder='Password' name='password' value={formState.password} id="pwd" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
    </form>
    </div>
    )
};

export default Login;

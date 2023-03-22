import React, { useState } from 'react';
import './signup.css';
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
        <form onSubmit={handleFormSubmit}>
        <div className="form-group">
            <input type="email" className="form-control" placeholder='Email' name='email' value={formState.email} aria-describedby="emailHelp" id='email' onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder='Password' name='password' value={formState.password} id="pwd" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
};

export default Login;

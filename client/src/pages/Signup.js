import React, { useState } from 'react';
import './signup.css';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

function Signup() {
    const [formState, setFormState] = useState({
        // firstName: '',
        // lastName: '',
        email: '',
        password: '',
    });
    
    const [addUser, { error, data }] = useMutation(ADD_USER);
    const [login, { error2 }] = useMutation(LOGIN);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
            },
        });
        console.log(mutationResponse);
        const loginResponse = await login({
            variables: {
                email: formState.email,
                password: formState.password
            },
        })
        const token = loginResponse.data.login.token;
        Auth.login(token);
    };

    return (
        <div  className='border mx-auto rounded bg-secondary'>
    <form onSubmit={handleFormSubmit} className="mx-auto w-50">
        <h2 className='text-white' style={{marginLeft: "45%"}}>Sign Up!</h2>
        <div className="form-contents mb-3" style={{marginLeft: "1%", marginRight: "1%"}}>
            <input type="email" className="form-control" placeholder='Email' name='email' value={formState.email} aria-describedby="emailHelp" onChange={handleChange} />
        </div>
        <div className="form-contents mb-3" style={{marginLeft: "1%", marginRight: "1%"}}>
            <input type="password" className="form-control" placeholder='Password' name='password' value={formState.password} id="exampleInputPassword1" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" style={{marginLeft: "25%"}}>Submit</button>
    </form>
    </div>
    )
}

export default Signup;

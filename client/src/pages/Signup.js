import React, { useState } from 'react';
import './signup.css';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

function Signup() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    
    const [addUser, { error, data }] = useMutation(ADD_USER);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
            ...formState,
            [name]: value
        });
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            
            Auth.login(data.addUser.token);
        } catch (err) {
            console.log("failed in signup form, try/catch");
            console.error(err);
        };
    };

    return (
    <form onSubmit={handleFormSubmit}>
        <div className="form-group">
            <input type="text" className="form-control" placeholder='First Name' name='firstName' value={formState.firstName} aria-describedby="firstName" onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder='Last Name' name='lastName' value={formState.lastName} aria-describedby="lastName" onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder='Email' name='email' value={formState.email} aria-describedby="emailHelp" onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder='Password' name='password' value={formState.password} id="exampleInputPassword1" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
}

export default Signup;

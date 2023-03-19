import React from 'react'
import './signup.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login-outer'>
            <div className='login-box'>
                <div className='login-box-title' style={{ color: 'black' }}>Login</div>
                <Input placeholder='Email' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor='#211F22' borderBottomColor='black' borderRadius='0%' color='black' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginRight='2%'/>
                <Input placeholder='Password' type='password' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor='#211F22' borderBottomColor='black' borderRadius='0%' color='black' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginRight='2%'/>
                <div className='login-forget'>Forgot Password</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button color='black' backgroundColor='#BC312E'>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;

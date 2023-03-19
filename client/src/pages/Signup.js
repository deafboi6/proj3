import React from 'react'
import './signup.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='register-outer'>
            <div className='register-box'>
                <div className='register-box-title' style={{ color: 'white' }}>REGISTER</div>

                <div className='register-row'>
                    <Input placeHolder='First Name' _placeholder={{ marginLeft: '8%', color: 'white' }} borderColor='#211F22' borderBottomColor='white' borderRadius='0%' color='white' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'white' }} marginRight='2%'/>
                    <Input placeHolder='Middle name (optional)' _placeholder={{ marginLeft: '8%', color: 'white' }} borderColor="#211F22" borderBottomColor="white" borderRadius="0%" color='white' _hover={{ borderColor:'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'white' }} marginLeft='2%'/>
                </div>

                <div className='register-row'>
                <Input placeHolder='Last name' _placeholder={{ marginLeft: '8%', color: 'white' }} borderColor='#211F22' borderBottomColor='white' borderRadius='0%' color='white' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'white' }} marginRight='2%'/>
                <Input placeHolder='Email' _placeholder={{ marginLeft: '8%', color: 'white' }} borderColor='#211F22' borderBottomColor='white' borderRadius='0%' color='white' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'white' }} marginRight='2%'/>

                </div>

                <div className='register-row'>
                <Input placeHolder='Password' type='password' _placeholder={{ marginLeft: '8%', color: 'white' }} borderColor='#211F22' borderBottomColor='white' borderRadius='0%' color='white' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'white' }} marginRight='2%'/>
                <Input placeHolder='Confirm Password' type='password' _placeholder={{ marginLeft: '8%', color: 'white' }} borderColor='#211F22' borderBottomColor='white' borderRadius='0%' color='white' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'white' }} marginRight='2%'/>

                </div>

                <div className='register-bottom'>
                    <div className='register-left'>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Button color='white' backgroundColor='#BC312E'>Register</Button>
                        </div>

                        <Link to='/Login'>
                            <div className='register-newuser'>Already Registered?<label style={{ color: '#BC312E' }}>Login</label></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
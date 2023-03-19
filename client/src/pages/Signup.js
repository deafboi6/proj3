import React from 'react'
import './signup.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='register-outer'>
            <div className='register-box'>
                <div className='register-box-title' style={{ color: 'black' }}>REGISTER</div>

                <div className='register-row'>
                    <Input placeholder='First Name' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor='#211F22' borderBottomColor='black' borderRadius='0%' color='black' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginRight='2%'/>
                    <Input placeholder='Middle name (optional)' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor="#211F22" borderBottomColor="black" borderRadius="0%" color='black' _hover={{ borderColor:'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginLeft='2%'/>
                </div>

                <div className='register-row'>
                <Input placeholder='Last name' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor='#211F22' borderBottomColor='black' borderRadius='0%' color='black' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginRight='2%'/>
                <Input placeholder='Email' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor='#211F22' borderBottomColor='black' borderRadius='0%' color='black' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginRight='2%'/>

                </div>

                <div className='register-row'>
                <Input placeholder='Password' type='password' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor='#211F22' borderBottomColor='black' borderRadius='0%' color='black' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginRight='2%'/>
                <Input placeholder='Confirm Password' type='password' _placeholder={{ marginLeft: '8%', color: 'gray' }} borderColor='#211F22' borderBottomColor='black' borderRadius='0%' color='black' _hover={{ borderColor: 'none' }} focusBorderColor='#211F22' _focus={{ borderBottomColor: 'black' }} marginRight='2%'/>

                </div>

                <div className='register-bottom'>
                    <div className='register-left'>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Button color='black' backgroundColor='#BC312E'>Register</Button>
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
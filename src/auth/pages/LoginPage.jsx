import React from 'react'
import { AuthLayout } from '../layouts/AuthLayout'
import {  Button, Card, Grid, TextField, Typography, styled } from '@mui/material'
import './login.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createUserFirebase, loginUserFirebase } from '../store/AuthThunks'


export const LoginPage = () => {

  const { state, errorMessage} = useSelector(state => state.auth);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const dispatch = useDispatch()

  const onSubmitLogin = ({ email, password, displayName}) => {
    dispatch(createUserFirebase({email, password, displayName}))
  };

  const onSubmitSignIn = ({ email, password}) => {
    dispatch(loginUserFirebase({email, password}))
  };


  return (
    <>
        <AuthLayout>
            <Grid  className='container-box container' sx={{ display: 'flex' }}>
              
                <Grid 
                    container
                    justifyContent="center"
                    alignItems="center" >

                    <form onSubmit={handleSubmit(onSubmitLogin)}>
                      <Grid 
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{p: 5}} >

                        <div className='text-header'> Log In</div>

                        <Grid item xs={12} sx={{ mt:5}} >
                          <TextField
                            {...register('email')}
                            label= 'Email' 
                            type='email'
                            fullWidth />
                        </Grid>

                        <Grid item xs={12} sx={{ mt:2}} >
                          <TextField
                            {...register('password')}
                            fullWidth
                            label= 'Password' 
                            type='password' />
                        </Grid>

                        <Grid item xs={12} sx={{ mt:2}}>
                          <Button 
                            variant='contained' 
                            color='primary'
                            type = 'submit' 
                            fullWidth
                            style={{
                              borderRadius: 20
                            }} >
                            <div className='text-button'>Login</div>
                          </Button>
                        </Grid>

                      </Grid>

                    </form>              
                </Grid>

                <Grid 
                    container
                    justifyContent="center"
                    alignItems="center" >

                  <form onSubmit={handleSubmit(onSubmitSignIn)}>

                    <Grid 
                      container
                      justifyContent="center"
                      alignItems="center"
                      sx={{p: 5}}
                      style={{backgroundColor: '#CB6CE6'}}>

                        <div className='text-header'>Sign in</div>

                        <Grid item xs={12} sx={{ mt:2}} >

                          <TextField
                            label= 'Full name' 
                            type='text'
                            {...register('displayName')}
                            fullWidth
                            variant='filled' 
                            sx={{
                              backgroundColor: '#FFFFFF',
                              borderRadius: 2
                            }} />
                        </Grid>
                        
                        <Grid item xs={12} sx={{ mt:2}} >

                          <TextField
                            label= 'Email'
                            type='email' 
                            {...register('email')}
                            fullWidth
                            variant='filled' 
                            sx={{
                              backgroundColor: '#FFFFFF',
                              borderRadius: 2
                            }} />
                        </Grid>

                        <Grid item xs={12} sx={{ mt:2}} >

                          <TextField
                            label= 'Password'
                            type='password'
                            {...register('password')}
                            fullWidth
                            variant='filled' 
                            sx={{
                              backgroundColor: '#FFFFFF',
                              borderRadius: 2
                            }} />
                        </Grid>

                        <Grid item xs={12} sx={{ mt:2}} >
                          <TextField
                            label= 'Repeat Password'
                            type='password'
                            {...register('password')}
                            fullWidth
                            variant='filled' 
                            sx={{
                              backgroundColor: '#FFFFFF',
                              borderRadius: 2
                            }} />
                        </Grid>
                      
                      <Grid item xs={12} sx={{ mt:2}}>
                        <Button 
                          className='btnSubmit' 
                          variant='contained' 
                          color='secondary' 
                          type = 'submit' 
                          fullWidth
                          style={{
                            borderRadius: 20
                          }}>
                          <div className='text-button'>Create Account</div>
                        </Button>
                      </Grid>
                        
                    </Grid>

                  </form>

                </Grid>

              </Grid>   

        </AuthLayout>
    </>
  )
}

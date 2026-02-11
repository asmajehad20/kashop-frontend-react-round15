import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import {loginSchema} from '../../../validation/LoginSchema'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  })
  const loginForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`, values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container maxWidth="sm">
      <Box component={'section'} className='login-form' py={5}>
        <Typography component={'h1'} variant='h1'>Login</Typography>
      </Box>
      <Box component={'form'} onSubmit={handleSubmit(loginForm)} display={'flex'} flexDirection={'column'} gap={2} mt={2} alignItems={'flex-start'}>
        <TextField {...register('email')} id="filled-basic" fullWidth label="Email" variant="filled" error={errors.email} helperText={errors.email?.message}/>
        <TextField {...register('password')} id="filled-basic" fullWidth label="Password" variant="filled" error={errors.password} helperText={errors.password?.message}/>
        <Button variant='contained' type='submit'>Login</Button>
      </Box>
    </Container>
  )
}

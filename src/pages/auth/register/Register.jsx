import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import {registerSchema} from '../../../validation/RegisterSchema'

export default function Register() {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  })
  const registeForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container maxWidth="sm">
      <Box component={'section'} className='register-form' py={5}>
        <Typography component={'h1'} variant='h1'>Register</Typography>
      </Box>
      <Box component={'form'} onSubmit={handleSubmit(registeForm)} display={'flex'} flexDirection={'column'} gap={2} mt={2} alignItems={'flex-start'}>
        <TextField {...register('userName')} id="filled-basic" fullWidth label="User Name" variant="filled" error={errors.userName} helperText={errors.userName?.message}/>
        <TextField {...register('fullName')} id="filled-basic" fullWidth label="Full Name" variant="filled" error={errors.fullName} helperText={errors.fullName?.message}/>
        <TextField {...register('email')} id="filled-basic" fullWidth label="Email" variant="filled" error={errors.email} helperText={errors.email?.message}/>
        <TextField {...register('password')} id="filled-basic" fullWidth label="Password" variant="filled" error={errors.password} helperText={errors.password?.message}/>
        <TextField {...register('phoneNumber')} id="filled-basic" fullWidth label="Phone Number" variant="filled" error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
        <Button variant='contained' type='submit'>Register</Button>
      </Box>
    </Container>
  )
}

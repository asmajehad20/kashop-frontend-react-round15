import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {

  const {register, handleSubmit, formState:{errors}} = useForm({})
  const registeForm = async (values)=>{
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Container maxWidth="sm">
      <Box component={'section'} className='register-form' py={5}>
        <Typography component={'h1'} variant='h1'>Register</Typography>
      </Box>
      <Box component={'form'} onSubmit={handleSubmit(registeForm)} display={'flex'} flexDirection={'column'} gap={2} mt={2} alignItems={'flex-start'}>
        <TextField {...register('userName', {required: true})} id="filled-basic" fullWidth label="User Name" variant="filled" />
        {errors.userName && <span>userName is required</span>}
        <TextField {...register('fullName', {required: true})} id="filled-basic" fullWidth label="Full Name" variant="filled" />
        <TextField {...register('email', {required: true})} id="filled-basic" fullWidth label="Email" variant="filled" />
        <TextField {...register('password', {required: true})} id="filled-basic" fullWidth label="Password" variant="filled" />
        <TextField {...register('phoneNumber', {required: true})} id="filled-basic" fullWidth label="Phone Number" variant="filled" />
        <Button variant='contained' type='submit'>Register</Button>
      </Box>
    </Container>
  )
}

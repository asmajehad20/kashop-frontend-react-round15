import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from 'react-toastify'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline />
    <ToastContainer />
    <App />
    </>
)

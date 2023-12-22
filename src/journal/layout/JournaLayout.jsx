import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/';
import { Sidebar } from '../components/';

const drawerWidth = 240;

export const JournaLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}} className='animate__animated animate__fadeIn animate__faster'>
        <Navbar drawerWidth ={drawerWidth}/>
        <Sidebar drawerWidth={drawerWidth}/>
        <Box
         component='main'
         sx={{flexGrow:1, pt:9, pl:3, pr:3}}
        >

            {children}
        </Box>
    </Box>
  )
}

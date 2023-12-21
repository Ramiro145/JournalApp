import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournaLayout } from '../layout/JournaLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournaLayout>
      <NothingSelectedView/>
      {/* <NoteView/> */}

      <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor:'error.main',
        ':hover':{backgroundColor:'error.main', opacity:0.9},
        position: 'fixed',
        right:50,
        bottom:50
      }}
      >
        <AddOutlined sx={{
          fontSize:30
        }}/>
      </IconButton>
    </JournaLayout>
  )
}

import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { TodoContext } from '../Context/TodoContext'

const NavBar = () => {
  const { saveTodoLsit } = useContext(TodoContext)

  const handleSaveAllChanges = () => {
    saveTodoLsit()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <div className='nav-item'>Todo Lsit</div>
          </Typography>
          <Button variant='outlined' color='inherit' onClick={() => handleSaveAllChanges()}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar

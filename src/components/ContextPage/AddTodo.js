import React, { useState, useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import { TodoContext } from '../Context/TodoContext'
import debounce from 'lodash/debounce'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import CardItem from './CardItem'

const AddTodo = () => {
  const data = useContext(TodoContext)
  const [collection, setCollections] = useState([])
  const [states, setStates] = useState({
    inputValue: '',
    discription: '',
  })
  const [errors, setErrors] = useState({
    inputValue: '',
    discription: '',
  })

  const handleChange = (e) => {
    debouncedfunc(e, 1)
  }

  const debouncedfunc = debounce((e, val) => {
    if (val === 1) {
      const { value, name } = e.target
      setStates({
        ...states,
        [name]: value,
      })
    }

    handleVlidation()
  }, 1000)

  const handleSubmit = (e) => {
    if (handleVlidation()) {
      let data = {
        title: states['inputValue'],
        discriptions: states['discription'],
      }
      setCollections([data, ...collection])
      setStates({
        inputValue: '',
        discription: '',
      })
    }
  }

  const handleVlidation = () => {
    let isvalid = true
    let err = { ...errors }
    let state = { ...states }

    if (state.inputValue === '') {
      err['inputValue'] = 'Please Enter Title'
      isvalid = false
    } else {
      err['inputValue'] = ''
    }

    if (state.discription === '') {
      err['discription'] = 'Please Enter Description'
      isvalid = false
    } else {
      err['discription'] = ''
    }

    setErrors(err)

    return isvalid
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ padding: '50px', textAlign: 'center' }}>
        <h2 style={{ padding: '5px' }}> ADD TODO LIST</h2>
        <br />
        <div style={{ padding: '5px', width: '50%', textAlign: 'start' }}>
          <TextField
            fullWidth
            id='outlined-multiline-static'
            label='Todo title'
            placeholder='Item...'
            value={setStates.inputValue}
            name='inputValue'
            onChange={(e) => handleChange(e)}
          />
          <span style={{ color: 'red', fontSize: '14px', textAlign: 'start ' }}>{errors['inputValue']}</span>
        </div>
        <div style={{ padding: '5px', width: '50%', textAlign: 'start' }}>
          <TextareaAutosize
            fullWidth
            aria-label='Todo Discription'
            placeholder='Todo Discription'
            minRows={4}
            style={{ width: '100%', padding: '0.5em' }}
            value={setStates.textValue}
            name='discription'
            onChange={(e) => handleChange(e)}
          />

          <span style={{ color: 'red', fontSize: '14px', textAlign: 'start ' }}>{errors['discription']}</span>
        </div>
        <div style={{ padding: '5px 5px 20px 5px ', width: '50%', textAlign: 'end' }}>
          <Button variant='contained' onClick={(e) => handleSubmit(e)}>
            Add Todo
          </Button>
        </div>

        <Box sx={{ flexGrow: 2 }}>
          <Grid container spacing={3}>
            {collection.map((item, index) => {
              return (
                <>
                  <Grid xs={4} key={index}>
                    <CardItem item={item} index={index} />
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default AddTodo

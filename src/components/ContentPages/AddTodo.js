import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/base/TextareaAutosize'

const AddTodo = () => {
  const [states, setStates] = useState({
    inputValue: '',
    discription: '',
  })
  const [collection, setCollections] = useState([])

  const handleChange = (e) => {
    const { value, name } = e.target
    setStates({
      ...states,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = {
      title: states['inputValue'],
      discriptions: states['discription'],
    }
    setCollections([...collection, data])
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ padding: '50px', textAlign: 'end' }}>
        <div style={{ padding: '5px', width: '50%' }}>
          <h3 style={{ padding: '5px' }}> ADD TODO LIST</h3>
          <TextField
            fullWidth
            id='outlined-multiline-static'
            label='Todo title'
            placeholder='Item...'
            value={setStates.inputValue}
            name='inputValue'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{ padding: '5px', width: '50%' }}>
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
        </div>
        <div style={{ padding: '5px', width: '50%', textAlign: 'end' }}>
          <Button variant='contained' onClick={(e) => handleSubmit(e)}>
            Add Todo
          </Button>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default AddTodo

import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#0075e8' : '#0075e8',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: 'white',
  fontWeight: '600',
}))

export default function CardItem({ item, index }) {
  return (
    <Item>
      <div>S.No : {index + 1}</div>
      <div>Title : {item.title}</div>
      <dvi> Discription : {item.discriptions}</dvi>
    </Item>
  )
}

import { Box, TextField, Typography } from '@material-ui/core'
import React from 'react'

interface Props {
  title: string
  inputValue: string
  onChangeValue: Function
}

export const TextInput: React.FC<Props> = (props) => {
  return (
    <Box m={2}>
      <Box>
        <Typography>{props.title}</Typography>
      </Box>
      <Box>
        <TextField
          label={props.title}
          variant='filled'
          value={props.inputValue}
          onChange={(e) => {
            props.onChangeValue(e.target.value)
          }}
        />
      </Box>
    </Box>
  )
}

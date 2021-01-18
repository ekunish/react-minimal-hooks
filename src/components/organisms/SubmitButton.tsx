import { Box, Button } from '@material-ui/core'
import React from 'react'

interface Props {
  title: string
  onClick: Function
}

export const SubmitButton: React.FC<Props> = props => {
  return (
    <Box m={2}>
      <Button
        variant='contained'
        color='primary'
        onClick={
          () => {
            props.onClick()
          }
        }>{props.title}</Button>
    </Box>
  )
}

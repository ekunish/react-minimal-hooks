import { Box, Typography } from '@material-ui/core'
import React from 'react'

interface Props {
  inputValue: string
  selectedValue: string
  clickCount: number
}

export const ShowState: React.FC<Props> = (props) => {
  return (
    <Box m={2}>
      <Typography>[state]</Typography>
      <Typography>{props.inputValue}</Typography>
      <Typography>{props.selectedValue}</Typography>
      <Typography>{props.clickCount}</Typography>
    </Box>
  )
}

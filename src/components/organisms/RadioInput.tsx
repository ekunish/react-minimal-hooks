import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'

interface Props {
  title: string
  selectedValue: string
  onChangeValue: Function
}


export const RadioInput: React.FC<Props> = props => {
  const RadioItem: string[] = ['1', '2', '3']
  return (
    <Box m={2}>
      <Box>
        <Typography>{props.title}</Typography>
      </Box>
      <Box>
        <RadioGroup
          onChange={
            (e) => {
              props.onChangeValue(e.target.value)
            }
          }
        >
          {RadioItem.map((id, idx) => {
            return (
              <FormControlLabel
                key={id}
                value={`radio${id}`}
                label={`radio${id}`}
                control={<Radio />}
              />
            )
          })}
        </RadioGroup>
      </Box>
    </Box>
  )
}

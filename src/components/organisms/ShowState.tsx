import React from 'react'

interface Props {
  inputValue: string
  selectedValue: string
  clickCount: number
}

export const ShowState: React.FC<Props> = (props) => {
  return (
    <div>
      <label>[state]</label>
      <div>{props.inputValue}</div>
      <div>{props.selectedValue}</div>
      <div>{props.clickCount}</div>
    </div>
  )
}

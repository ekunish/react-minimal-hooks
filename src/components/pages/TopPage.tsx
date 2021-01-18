import React, { useState } from 'react'
import { RadioInput } from '../organisms/RadioInput'
import { ShowState } from '../organisms/ShowState'
import { SubmitButton } from '../organisms/SubmitButton'
import { TextInput } from '../organisms/TextInput'

export const TopPage: React.FC = () => {
  const [inputValue, setinputValue] = useState('')
  const [selectedValue, setselectedValue] = useState('')
  const [clickCount, setclickCount] = useState(0)

  const handleInputValue = (value: string) => {
    setinputValue(value)
    console.log(value)
  }

  const handleSelectedValue = (value: string) => {
    setselectedValue(value)
    console.log(value)
  }

  const submit = () => {
    setclickCount(clickCount + 1)
    console.log(clickCount+1)
  }
  
  return (
    <>
    <TextInput title='入力' inputValue={inputValue} onChangeValue={handleInputValue} />
    <RadioInput title='ラジオ' selectedValue={selectedValue} onChangeValue={handleSelectedValue} />
    <SubmitButton title='Click me' onClick={submit} />
    <ShowState inputValue={inputValue} selectedValue={selectedValue} clickCount={clickCount} />
    </>
  )
}

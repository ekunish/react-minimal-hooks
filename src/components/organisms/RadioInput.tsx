import React from 'react'

interface Props {
  title: string
  selectedValue: string
  onChangeValue: Function
}


export const RadioInput: React.FC<Props> = props => {
  const Radio: string[] = ['1','2','3']
  return (
    <div>
      <span>{props.title}</span>

      {Radio.map((id, idx) => {
        return (
          <div key={idx}>
            <input
              type='radio'
              id={id}
              name='radio-group'
              value={`radio${id}`}
              onChange={(e) => props.onChangeValue(e.target.value)} />
            <label>{id}</label>
          </div>
        )
      })}


    </div>
  )
}

import { useState } from 'react'
import styled from 'styled-components/macro'

export default function Button({ option, setNewFilter }) {
  function handleClick(event) {
    setIsActive(!isActive)
    setNewFilter(event)
  }

  const [isActive, setIsActive] = useState(false)

  return (
    <Filterbutton
      selected={isActive}
      onClick={event => handleClick(event)}
      value={option}
    >
      {option}
    </Filterbutton>
  )
}

const Filterbutton = styled.button`
  appearance: none;
  padding: 10px 20px;
  background-color: #daeff8;
  border: none;
  color: var(--color-textgrey);
  font-weight: bold;
  :active {
    background-color: #0f94d0;
    color: white;
  }
`

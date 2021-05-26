import styled from 'styled-components/macro'
import Filterbutton from './Filterbutton'

export default function Filterblock({ title, filterOptions, setNewFilter }) {
  return (
    <Filterblockwrapper>
      <h3>{title}</h3>
      <Buttonwrapper>
        {filterOptions.map((option, index) => (
          <Filterbutton
            key={index}
            option={option}
            setNewFilter={setNewFilter}
          />
        ))}
      </Buttonwrapper>
    </Filterblockwrapper>
  )
}

const Filterblockwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
  margin-right: 100px;
  h3 {
    margin: 0;
  }
`

const Buttonwrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-flow: wrap;
`

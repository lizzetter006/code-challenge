import styled from 'styled-components'

export default function Headline({ title }) {
  return <Header>{title}</Header>
}

const Header = styled.header`
  background-color: #33657b;
  padding: var(--wrapper-padding);
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
`

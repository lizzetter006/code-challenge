import styled from 'styled-components/macro'
import { useState } from 'react'
import Headline from './components/Header'
import Filterblock from './components/Filterblock'
import Results from './components/Results'
import filterOptions from './filterOptions.json'
import restaurantsList from './Restaurants.json'

export default function App() {
  const { Kategorien, Entfernung, Preis, Veggietauglich } = filterOptions

  const [restaurants, setRestaurants] = useState(restaurantsList)

  const [categoryFilter, setCategoryFilter] = useState('Alles')

  function randomize() {
    let array = restaurants
    let i = array.length
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[ri]] = [array[ri], array[i]]
    }
    console.log(array)
    setRestaurants(array)
  }

  // Im console.log wird es richtig ausgegeben, aber setRestaurants löst keinen rerender aus.
  // reset löst jedoch einen rerender aus

  function reset() {
    setRestaurants(restaurantsList)
    setCategoryFilter('Alles')
  }

  function updateFilter(event) {
    setCategoryFilter(event.target.value)
  }

  return (
    <Content>
      <Headline title="Was essen wir denn heute?" />
      <Wrapper>
        <Filterblock
          title="Kategorien - FILTER"
          filterOptions={Kategorien}
          setNewFilter={updateFilter}
        />
        <Filterblock
          title="Entferung"
          filterOptions={Entfernung}
          setNewFilter={updateFilter}
        />
        <Filterblock
          title="Preis"
          filterOptions={Preis}
          setNewFilter={updateFilter}
        />
        <Filterblock
          title="Veggietauglich"
          filterOptions={Veggietauglich}
          setNewFilter={updateFilter}
        />
        <Results
          displayRestaurants={restaurants}
          categoryFilter={categoryFilter}
        />
        <Buttonwrapper>
          <Button onClick={() => reset()}>Reset</Button>
          <Button onClick={() => randomize()}>Randomize</Button>
        </Buttonwrapper>
      </Wrapper>
    </Content>
  )
}

const Content = styled.div`
  width: 60vw;
  background-color: whitesmoke;
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  padding: var(--wrapper-padding);
`

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
  width: 49%;
`

const Button = styled.button`
  appearance: none;
  padding: 10px 20px;
  background-color: #daeff8;
  border: none;
  height: max-content;
  color: var(--color-textgrey);
  font-weight: bold;
  font-size: 1.2rem;
  :active {
    background-color: #0f94d0;
    color: var(--color-white);
  }
`

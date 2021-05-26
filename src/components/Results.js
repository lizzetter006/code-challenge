import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCar,
  faEuroSign,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons'

export default function Results({ displayRestaurants, categoryFilter }) {
  return (
    <Listwrapper>
      <h3>Ergebnisse</h3>
      <List>
        {displayRestaurants
          .filter(
            restaurant =>
              categoryFilter === 'Alles' ||
              restaurant.kategorie === categoryFilter
          )
          .map((entry, index) => (
            <li key={index}>
              <span>{entry.name}</span> | <StyleIcon icon={faCar} />
              <span>{entry.entfernung}</span> | <StyleIcon icon={faEuroSign} />
              <span>{entry.preis}</span> |<StyleIcon icon={faSeedling} />
              <span>{entry.veggieTauglichkeit}</span>
            </li>
          ))}
      </List>
    </Listwrapper>
  )
}

const Listwrapper = styled.div`
  display: grid;
  gap: 10px;
  width: 49%;
`

const List = styled.ul`
  border: 2px solid black;
  padding: 20px 40px;
  display: grid;
  margin: 0;
  list-style-type: decimal;
  span {
    margin-right: 10px;
  }
`

const StyleIcon = styled(FontAwesomeIcon)`
  color: green;
`

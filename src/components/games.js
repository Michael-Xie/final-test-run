import React, {useEffect, Fragment} from "react"
import styled from "styled-components"
import getGames from "../req/getGames.js"

/* styling with styled components */
const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Home = styled.span`
  font-size: 1.5em;
`
const Versus = styled.span`
  margin-right: 2vw;
  margin-left: 2vw;
  font-size: 1.5em;
  color: #f00;
`

const Away = styled.span`
  font-size: 1.5em;
`

const Date = styled.span`
  color: #44f;
`

/* ------------------------------ */

const Games = ({setState, state}) => {
  const API_HOST = "api-basketball.p.rapidapi.com" 
  const API_KEY = "d8dfc5cbfdmshbb0b69d2a790b3dp1ba90ejsn8f36ab430b8b"

  useEffect(() => {
    getGames(API_KEY, API_HOST, setState)
  }, [])

  const keys = Object.keys(state.games)
  console.log(state.games)

  return (
    <Fragment>
      <Date>
        <h2>{state.date}</h2>
      </Date>
      <Container>
        <Home>
        { 
          keys.map(value => {
            return <div key={value}>{state.games[value].teams.home.name}</div>
          })
        }
        </Home>
        <Versus>
        {
          keys.map(value => {
            return <div key={value}>vs. </div>
          })
        }
        </Versus>
        <Away>
        { 
          keys.map(value => {
            return <div key={value}>{state.games[value].teams.away.name}</div>
          })
        }
        </Away>
      </Container>
    </Fragment>
  )
}

export default Games;

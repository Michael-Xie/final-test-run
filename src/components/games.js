import React, {useEffect, Fragment} from "react"
import styled from "styled-components"
import getGames from "../req/getGames.js"

const Games = ({setState, state}) => {
  const API_HOST = "api-basketball.p.rapidapi.com" 
  const API_KEY = "d8dfc5cbfdmshbb0b69d2a790b3dp1ba90ejsn8f36ab430b8b"

  useEffect(() => {
    getGames(API_KEY, API_HOST, setState)
  }, [])

  const keys = Object.keys(state)
  console.log(state)

  return (
    <Fragment>
      { keys.map(value => {
          return <div key={value}>{state[value].teams.home.name}</div>
        })
      }
    </Fragment>
  )
}

export default Games;

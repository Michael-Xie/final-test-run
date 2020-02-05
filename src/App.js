import React, {useState} from 'react'
import './App.css'
import styled from "styled-components"
// components import
import Games from "./components/games.js"

function App() {
  const [state, setState] = useState({
    games: [],
    date: ""
  })

  return (
    <div className="App">
      <Games setState={setState} state={state}/>
    </div>
  );
}

export default App;

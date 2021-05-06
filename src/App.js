import React from 'react'

import styled from 'styled-components'

import { RandomShow } from './components/RandomShow'
import { FilterShows } from './components/FilterShows'

const Main = styled.main`
  background-color: #161a1d;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`

export const App = () => {
  return (
    <Main>
      <h1>What to watch tonight?</h1>
      <RandomShow />
      {/* <FilterShows /> */}
    </Main>
  )
}

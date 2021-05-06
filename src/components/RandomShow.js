import { isEmpty } from 'lodash'
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ShowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  width: 500px;
  padding: 20px;
  margin-top: 40px;
  text-align: center;
`

const Button = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 6px;
  background-color: #a4161a;
  border: none;
  font-size: 20px;
  font-weight: 900;
  color: white;
`

const Title = styled.h1`
  margin-bottom: 0;
`

const ShowDescription = styled.p`
  font-size: 18px;
`

const Suggestion = styled.p`
  font-size: 24px;
  margin-bottom: 0;
`

export const RandomShow = () => {
  const API = 'https://siris-tvshows-api.herokuapp.com/shows/random'
  const [randomShow, setRandomShow] = useState({})

  const onButtonClick = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setRandomShow(data))
  }

  return (
    <Wrapper>
      <Button type="button" onClick={onButtonClick}>Suggest a random show!</Button>
      {!isEmpty(randomShow) && (
        <ShowWrapper>
          <Suggestion>What about...</Suggestion>
          <Title>— {randomShow.title} —</Title>
          <p>{randomShow.release_year} ‧ {randomShow.duration}</p>
          <ShowDescription>{randomShow.description}</ShowDescription>
          <p>{randomShow.listed_in}</p>
        </ShowWrapper>
      )}
    </Wrapper>
  )
}
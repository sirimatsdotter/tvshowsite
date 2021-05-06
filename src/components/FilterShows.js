import React, { useState } from 'react'

export const FilterShows = () => {
  const [country, setCountry] = useState('')
  const [year, setYear] = useState('')
  const [filteredList, setFilteredList] = useState([])

  const onFormSubmit = (event) => {
    event.preventDefault()
    fetch(`https://siris-tvshows-api.herokuapp.com/shows?country=${country}&year=${year}`)
      .then((res) => res.json())
      .then((data) => setFilteredList(data))
  }

  return (
    <>
      <h3>Get a list of suggestions based on your liking!</h3>
      <form>
        <label>Country
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value)} />
        </label>
        <label>Year
          <input
            type="text"
            onChange={(e) => setYear(e.target.value)} />
        </label>
        <button onClick={(e) => onFormSubmit(e)} type="submit">Generate shows</button>
      </form>
      <div>
        {filteredList.map((show) => (
          <div>
            <p>{show.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}
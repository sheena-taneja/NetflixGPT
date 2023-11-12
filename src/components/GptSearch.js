import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { LOGO } from '../utils/constants'

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={LOGO}
          alt="backgroundimage"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  )
}

export default GptSearch

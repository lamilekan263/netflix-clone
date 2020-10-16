import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

import './Row.css'
 
const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [ trailerUrl, setTrailerUrl] = useState('')
    
    useEffect(() => {
      async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results)
        console.log(request.data.results);
      }
      fetchData();
    }, [fetchUrl]);
    const opts = {
        height: "390",
        width: '100%',
        playerVars: {
            autoplay:1
        }
    }
    const handleClick = (movie) => {
        console.log("clicked", movie.original_name);
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    setTrailerUrl(urlParams.get('v'))
            }).catch( error => console.log(error))
        }
    }
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posterRow">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "posterLarge"}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    );
}

export default Row

import React, { useState, useEffect} from 'react'
import axios from '../../axios'
import requests from '../../request'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
              request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
              ]
            );
            return request;
        }
        fetchData()
        
    }, [])
    console.log("banner", movie);
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}
        >  
            <div className="banner__content">
                <h1>
                    { movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    { movie?.overview}
                </h1>
            </div>
            <div className="banner--fadeBottom">
                
            </div>
            {/* title */}
            {/* div > buttons */}
            {/* description */}
        </header>
    )
}

export default Banner

import React from 'react'
import request from './request'

import Row from './components/row/Row' 
import './App.css'

const App = () => {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Row
          title={"NETFLIX ORIGINALS"}
                fetchUrl={request.fetchNetflixOriginals}
                isLargeRow
        />
        <Row title={"Trending Now"} fetchUrl={request.fetchTrending} />
        <Row title={"Top Rated"} fetchUrl={request.fetchTopRated} />
        <Row title={"Action Movies"} fetchUrl={request.fetchActionMovies} />
        <Row title={"Comedy"} fetchUrl={request.fetchComedyMovies} />
        <Row title={"Horror"} fetchUrl={request.fetchHorrorMovies} />
        <Row title={"Romance"} fetchUrl={request.fetchRomanceMovies} />
        <Row title={"Documentaries"} fetchUrl={request.fetchDocumentaries} />
      </div>
    );
}

export default App

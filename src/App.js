import React from 'react'
import request from './request'

import Banner from './components/banner/Banner'

import Row from './components/row/Row' 
import './App.css'
import Nav from './components/navBar/Nav'

const App = () => {
    return (
      <div className="app">
        <Nav />
        <Banner />
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

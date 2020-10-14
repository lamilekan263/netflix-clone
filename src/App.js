import React from 'react'
import request from './request'

import Row from './components/row/Row' 

const App = () => {
    return (
        <div className="App">
            <h1>Hello world</h1>
            <Row title={'Netflix originmals'} fetchUrl ={request.fetchNetflixOriginals} />
            <Row title={' Trendings'} fetchUrl={request.fetchTrending}/>
        </div>
    )
}

export default App

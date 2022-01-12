import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const {id} = useParams();
    return (
        <div>
            <h1>Movie item id={id}</h1>
        </div>
    )
}

export default MovieDetail

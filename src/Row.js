import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css';
import { Grid } from '@material-ui/core'

const baseurl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, getMovie, isLargeRow }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(getMovie);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [getMovie]);

    console.log(movies)

    return (
        <div className="row">
            <h2 className="title_row">{title}</h2>
            <div className="row_poster">
                {movies.map(movie => (
                    <div>
                        <img  key={movie.id} src={`${baseurl}${movie.poster_path}`} alt={movie.title} />
                            <div className="row_poster_title">
                                <span>{new Date().toDateString().slice(4,10)}</span>
                                <span>{movie.title}</span>
                            </div>
                    </div>
                ))}
            </div>
                    </div>
                )
}

export default Row

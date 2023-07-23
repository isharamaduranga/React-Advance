import React from 'react';
import './MovieList.css'
import Movie from "../Movie/Movie";

const MovieList = (props) => {
    return (
        <ul className='movies-list'>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    );
};

export default MovieList;
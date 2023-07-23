import React, {useState} from 'react';

import MoviesList from './components/MovieList/MovieList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    /** Fetching data using fetch method and URL*/
    async function fetchMovieHandler() {
        setIsLoading(true);
        setError(null)
        try {
            const response = await fetch('https://swapi.dev/api/films/')
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json();

            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            })
            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false);
    }

    /** Checking few conditions for response*/
    let content = <p>Found No Movies ... 😥</p>
    if (isLoading) {
        content = <p>🔃Loading ...</p>
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }

    return (<React.Fragment>
            <section>
                <button
                    onClick={fetchMovieHandler}
                >
                    Fetch Movies
                </button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>);
}

export default App;

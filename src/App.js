import React, {useEffect, useState,useCallback} from 'react';

import MoviesList from './components/MovieList/MovieList';
import './App.css';
import AddMovie from "./components/AddMovie/AddMovie";
import data from "bootstrap/js/src/dom/data";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    /** Fetching data using fetch method and URL*/
   const  fetchMovieHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null)

            try {
            const response = await fetch('https://react-http-92682-default-rtdb.firebaseio.com/movies.json')
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json();

            const  loadMovies = [];

                for (const key in data) {
                    loadMovies.push({
                        id:key,
                        title:data[key].title,
                        openingText:data[key].openingText,
                        releaseDate:data[key].releaseDate,
                    })
                }

            setMovies(loadMovies);
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false);
    },[]);

    useEffect(() => {
        fetchMovieHandler();
    }, [fetchMovieHandler]);

    const addMovieHandler = async (movie)=> {
        const response = await fetch('https://react-http-92682-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body:JSON.stringify(movie),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();

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
            <AddMovie onAddMovie={addMovieHandler}/>
        </section>
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

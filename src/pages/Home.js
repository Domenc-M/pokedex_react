import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListMovies from '../components/ListMovies';
// import SearchArea from '../components/SearchArea';
import Header from './../components/Header';
import Panel from './../components/Panel';

const Home = () => {

    const [movies, setMovies] = useState([]);
    // useState veut dire que React va render de nouveau la constante. Mais il faut lui définir des setter
    const [movieSearch, setMovieSearch] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(0);

    useEffect(()=> {
        axios.get(movieSearch ? `https://api.themoviedb.org/3/search/movie?api_key=2a7bc3506d9e237e752a6e713962fea0&query=${movieSearch}
        ` : "https://api.themoviedb.org/3/movie/popular?api_key=2a7bc3506d9e237e752a6e713962fea0&query=Jack+Reacher")
        .then(res => {
            setMovies(res.data.results);
        })
    }, [movieSearch]);


    const search = (e) => {
        // On capture (stock dans une variable) l'evenement, et on utilise PreventDefault
        // pour empêcher qu'il fasse son comportement habituel (recharger la page)
        e.preventDefault();
        setMovieSearch(e.target[0].value);
    }

    return (
        <div id="home">

            <Header />

            <main>

                <div className='searchArea'>
                    <form onSubmit={search}>
                        <input type="search" placeholder='Rechercher...'/>
                        <button type="submit">Go</button>
                    </form>
                </div>

            <ListMovies movies={movies} setSelectedMovie={setSelectedMovie}/>
            {selectedMovie !==0 ? <Panel id={selectedMovie} /> : false}

            </main>
        </div>
    );
};

export default Home;
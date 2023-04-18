import Pokepic from '../components/Pokepic.js';
import '../scss/home.scss'
import {Link} from 'react-router-dom';

    let array = [];
    for (let i = 0; i < 6; i++) {
        let rng = Math.random() * (1010) + 1;
        rng = Math.trunc(rng);
        array.push(rng);
    }

const Home = () => {

    return (
        <div id="home">
            <main>
                <section className="welcome">
                    <span>
                        Welcome to the Pokédex ! <br/>
                        Here, you can lookup Pokémon stats as much as you want, using the searchbar. <br/>
                        Meanwhile, here are 6 random Pokémons. <br/>
                    </span>
                </section>
                <section className="randomPokeContainer">
                    {array.map( i => (
                        <Link to={'/' + i + '/details'} key={i} >
                            <Pokepic pid={i}/>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Home;
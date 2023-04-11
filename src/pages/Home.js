import Pokepic from '../components/Pokepic.js';
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
                <div class="randomPokeContainer">
                    {array.map( i => (
                        <Link to={'/' + i + '/details'}>
                            <Pokepic pid={i}/>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
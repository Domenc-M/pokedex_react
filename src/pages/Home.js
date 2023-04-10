import axios from 'axios';
import RandomPoke from '../components/randomPoke.js';

let rng = 50;

const Home = () => {

    return (
        <div id="home">
            <main>
                <RandomPoke/>
            </main>
        </div>
    );
};

export default Home;
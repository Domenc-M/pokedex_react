import axios from 'axios';
import Pokepic from '../components/Pokepic.js';

const Home = () => {

    return (
        <div id="home">
            <main>
                <Pokepic pid="356" />
            </main>
        </div>
    );
};

export default Home;
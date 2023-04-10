import Pokepic from '../components/Pokepic.js';

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
                        <Pokepic pid={i}/>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
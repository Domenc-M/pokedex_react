import Pokepic from '../components/Pokepic.js';

let rng = Math.random() * (1010) + 1;

rng = Math.trunc(rng);
console.log(rng);

const randomPoke = () => {
    return (
        <a>
            <Pokepic pid={rng} />
        </a>
    );
};

export default randomPoke;
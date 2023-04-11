import Pokepic from '../components/Pokepic.js';
import {
    useParams,
  } from "react-router-dom";

const Details = () => {

    let params = useParams();
    console.log(params.id);

    return (
        <div id="home">
            <main>
            <Pokepic pid={params.id}/>
            </main>
        </div>
    );
};

export default Details;
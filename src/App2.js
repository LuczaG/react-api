import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon2 from './components/Pokemon2';

function App2() {

    const [pokemonList, setPokemonList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => setPokemonList(res.data))
    }, []);

    const searchedPokemon = pokemonList.filter(p => {
        return p.name.toLowerCase().includes(search.toLocaleLowerCase())
    });


    return (
        <div className="App">
            <div className="crypto-header">
                <h1>Pokemon kereső</h1>
                <input type="text" placeholder='Pokemon' onChange={(e) => setSearch
                    (e.target.value)} />
            </div>

            <div className="crypto-container">
                {

                    searchedPokemon.map(pokemon => {
                        return <Pokemon2 img={pokemon.sprites.front_default} name={pokemon.name} />
                    })

                }
            </div>
        </div>
    );
}

export default App2
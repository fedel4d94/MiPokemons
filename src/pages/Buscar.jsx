
import MostrarPokemon from '../components/MostrarPokemon';
import usePokemonByName from '../hooks/usePokemonByName'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import './Buscar.css'
import MostrarError from '../components/MostrarError';


function Buscar() {
    const [nombreInput, setNombreInput] = useState('');
    const [nombreBuscado, setNombreBuscado] = useState("");
    const { pokemon, loading, error } = usePokemonByName(nombreBuscado);

    console.log("estoy en buscar")
    console.log(pokemon)

    const handleBuscar = () => {
        setNombreBuscado(nombreInput.trim());
    }

    const renderPokemon = () => {
        if (error)
            return <MostrarError error={error}></MostrarError>

        if (!pokemon || !pokemon.sprites) {
            return null;
        }
        return (
            <MostrarPokemon pokemon={pokemon}></MostrarPokemon>
        )
    }

    useEffect(() => {
        document.title = 'Buscar Pokemon';
    }, []);


    return (
        <>
            <div className='buscar-container'>
                <h4 className='tituloPagina-buscar'>¡Busca Pokemons por Nombre o por #ID</h4>
                <div className='buscador-div'>
                    <input type="text" className='input-buscar'
                        placeholder='Buscar Pokemon por nombre'
                        value={nombreInput}
                        onChange={e => setNombreInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key == 'Enter')
                                handleBuscar();
                        }}
                    />
                    <button className='button-buscar' onClick={handleBuscar}>Buscar</button>
                    <SearchIcon className='searchIcon'></SearchIcon>
                </div>

                {loading && <p>Cargando...</p>}

                {renderPokemon()}

            </div>
        </>
    )
}


export default Buscar
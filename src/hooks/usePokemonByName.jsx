import { useState, useEffect } from "react"



const usePokemonByName = (name) => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const fetchPokemons = async (url) => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(url)
            //vemos q no haya error en la consulta.
            if (!response.ok) {
                if (response.status === 404)
                    throw new Error("Pokemon no encontrado, verifica el ID o el Nombre ")
                else {
                    throw new Error("HTTP error! status: " + response.status);
                }
            }

            const data = await response.json()
            setPokemon(data);
            //setInfo(data.info);

        } catch (error) {
            console.log("error al buscar pokemon ", error);
            setError(error)
            setPokemon([])
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!name || name.trim() == "") {
            //no hay nombres
            setPokemon([]);
            setError(null)
            setLoading(false)
            return;
        }
        //consumo la url inicial de mi api desde .env
        const initialUrl = import.meta.env.VITE_API_BASE_URL + name.toLowerCase();
        console.log("consultando:", initialUrl)

        if (initialUrl) {
            fetchPokemons(initialUrl)
        } else {
            setError(new Error("Error con la variable env, no esta definido"))
            setLoading(false)
        }
    }, [name])
    return { pokemon, loading, error }
}

export default usePokemonByName
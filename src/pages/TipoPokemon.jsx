import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './TipoPokemon.css'

const fondoPorTipo = {
    grass: 'linear-gradient(to bottom, #a8e6a2, #dcedc1)',
    fire: 'linear-gradient(to bottom, #f57c00, #ffccbc)',
    water: 'linear-gradient(to bottom, #00bcd4, #b2ebf2)',
    default: 'linear-gradient(to bottom, #e0e0e0, #ffffff)',
}
const fondoTipoCards = {
    grass: 'linear-gradient(to bottom,rgb(79, 158, 75),rgb(98, 226, 108))',
    fire: 'linear-gradient(to bottom,rgb(238, 58, 34),rgb(248, 235, 122))',
    water: 'linear-gradient(to bottom,rgb(23, 75, 247),rgb(14, 215, 241))',
    default: 'linear-gradient(to bottom, #e0e0e0, #ffffff)',
}

function TipoPokemon({ tipo, titulo }) {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)

        fetch(`https://pokeapi.co/api/v2/type/${tipo}`)
            .then((res) => res.json())
            .then(async (data) => {

                const allPokemon = data.pokemon.map(p => p.pokemon)

                // Mezclar aleatoriamente y tomar 30
                const shuffled = allPokemon.sort(() => 0.5 - Math.random())
                const selected = shuffled.slice(0, 30)

                // Obtener detalles de cada uno
                const promises = selected.map(async (p) => {
                    { console.log(p) }
                    const res = await fetch(p.url)
                    const details = await res.json()
                    { console.log(details) }
                    return {
                        id: details.id,
                        name: details.name,
                        image: details.sprites.front_default,
                        weight: details.weight,
                        stats: details.stats.map(s => ({
                            name: s.stat.name,
                            value: s.base_stat
                        })),
                    }
                })

                const results = await Promise.all(promises)
                setPokemons(results)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [tipo])

    const fondoPage = fondoPorTipo[tipo] || fondoPorTipo.default
    const fondoCards = fondoTipoCards[tipo] || fondoTipoCards.default
    return (
        <Box sx={{ padding: 0, background: fondoPage, minHeight: '100vh', borderRadius: '20px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: '30px', padding: '0', margin: '50px' }}>
                <Button component={Link} to="/" variant='contained' startIcon={<ArrowBackIcon />} sx={{
                    margin: '10px', padding: '10px 20px', background: fondoCards
                }}>
                    Atras</Button>
                <h1 className={`tituloPagina-Tipos ${titulo.toLowerCase()}`}>Pokémons tipo {titulo.toUpperCase()}</h1>

            </Box>


            {
                loading ? (
                    <CircularProgress />
                ) : (
                    <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
                        {pokemons.map((poke, i) => (
                            <ListItem key={i} sx={{
                                background: fondoCards,
                                borderRadius: 2,
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
                                mb: 2,
                                p: 2,
                                maxWidth: '1000px',
                                width: '100%',

                            }}>
                                <ListItemAvatar>
                                    <Avatar src={poke.image} alt={poke.name} sx={{ width: 150, height: 100 }} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`#${poke.id} - ${poke.name}`}
                                    secondary={
                                        <>
                                            <Typography variant="body2" component={"span"}>Peso: {poke.weight}</Typography>
                                            <Typography variant="body2" component={"span"}>
                                                Stats:{" "}
                                                {poke.stats
                                                    .map(stat => `${stat.name}: ${stat.value}`)
                                                    .join(" | ")}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>

                        ))}
                    </List>
                )
            }
        </Box >
    );
}

export default TipoPokemon;
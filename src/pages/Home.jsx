import React, { useEffect } from 'react'
import { Grid, Paper, Box, Button } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Link } from 'react-router-dom'
import fondoHome from '../assets/FondoHome5.jpg'
import './Home.css'




function Home() {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <Box className="box-container-home">
            <Paper sx={{ padding: 2, backgroundColor: 'white', boxSizing: 'border-box' }}>
                <img src={fondoHome} alt="" style={{
                    width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px',
                    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.8)',
                }} />
            </Paper>
            <Paper sx={{
                background: 'linear-gradient(to bottom,rgb(143, 216, 235),rgb(140, 118, 194))',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                margin: '0 10px',
                boxSizing: 'border-box',

            }}>
                <Box sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    padding: 2,
                    background: 'linear-gradient(to bottom,rgb(143, 216, 235),rgb(140, 118, 194))',
                    boxShadow: '0px 4px 50px rgba(255, 255, 255, 0.8)',
                    height: '90%',
                    width: '90%'
                }}>
                    <h1 className="pokemon-title">¡Pokémon!</h1>
                    <h4 className='tituloPagina-home'>¡Bienvenidos a MiPokemons!</h4>
                    <h4 className="h4-home">Descubrí nuestro contenido, podes listar rapidamente Pokemons por Clase!</h4>

                    <Button component={Link} to="/tipo/grass" variant='contained' startIcon={<FilterListIcon />}
                        sx={{
                            textTransform: 'none', width: '200px', margin: '20px', background: '#21a6e4',
                            border: '2px solid rgb(77, 87, 226)', '&:hover': {
                                background: 'rgb(45, 133, 184)',
                                borderColor: 'rgb(77, 87, 226)',
                                boxShadow: '0 4px 20px rgba(235, 240, 243, 0.8)',
                            }
                        }}>
                        Pokemons Planta
                    </Button>
                    <Button component={Link} to="/tipo/fire" variant='contained' startIcon={<FilterListIcon />}
                        sx={{
                            textTransform: 'none', width: '200px', margin: '20px', background: '#21a6e4', border: '2px solid rgb(77, 87, 226)', '&:hover': {
                                background: 'rgb(45, 133, 184)',
                                borderColor: 'rgb(77, 87, 226)',
                                boxShadow: '0 4px 20px rgba(235, 240, 243, 0.8)',
                            }
                        }}>
                        Pokemons Fuego
                    </Button>
                    <Button component={Link} to="/tipo/water" variant='contained' startIcon={<FilterListIcon />}
                        sx={{
                            textTransform: 'none', width: '200px', margin: '20px', background: '#21a6e4', border: '2px solid rgb(77, 87, 226)', '&:hover': {
                                background: 'rgb(45, 133, 184)',
                                borderColor: 'rgb(77, 87, 226)',
                                boxShadow: '0 4px 20px rgba(235, 240, 243, 0.8)',
                            }
                        }}>
                        Pokemons Agua
                    </Button>
                </Box>
            </Paper>
        </Box >
    )
}

export default Home
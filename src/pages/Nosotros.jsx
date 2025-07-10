
import { useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import fedeAvatar from '../assets/fede-avatar.jpg'
import './Nosotros.css'

function Nosotros() {
    useEffect(() => {
        document.title = 'Nosotros';
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 5,
                px: 2,
            }}
        >
            <Card
                sx={{
                    maxWidth: 600,
                    padding: 3,
                    borderRadius: 3,
                    backgroundColor: '#f8f8f8',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
            >
                {/* Avatar */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Avatar
                        alt="Federico Vernet"
                        src={fedeAvatar}
                        sx={{ width: 150, height: 150, border: '3px solid #21a6e4' }}
                    />
                </Box>

                {/* Título */}
                <h4 className='tituloPagina-nosotros'>Sobre Nosotros</h4>

                {/* Texto principal */}
                <CardContent>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '16px',
                            color: '#333',
                            lineHeight: 1.7,
                            fontFamily: 'Roboto, sans-serif',
                        }}
                    >
                        ¡Hola! Soy <strong>Federico Vernet</strong>, desarrollador fullstack y fanático de Pokémon desde chico 🧢⚡.
                        <br /><br />
                        Esta web nació como un proyecto personal para combinar la tecnología con el mundo Pokémon, usando React, la PokéAPI y mucho entusiasmo.
                        <br /><br />
                        ¿Tenés ideas, sugerencias o simplemente querés saludar? ¡Estoy abierto a escuchar a otros entrenadores!
                    </Typography>

                    {/* Redes */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <IconButton
                            href="https://github.com/fedel4d94/MiPokemons"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: '#333' }}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/ing-federico-vernet-49294a221/"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: '#0072b1' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Nosotros;

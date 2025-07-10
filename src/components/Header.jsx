import './Header.css'
import { Link } from 'react-router-dom'
import { Grid, Paper, Box, Button } from '@mui/material'

function Header() {
    const pages = [
        { name: 'MiPokemons!', path: '/' },
        { name: 'Buscar', path: '/buscar' },
        { name: 'Sobre Nosotros', path: '/nosotros' },
        { name: 'Contacto', path: '/contacto' }
    ]


    return (
        <header>
            <div className="navbar">
                <div className="navbar-container">

                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            component={Link}
                            to={page.path}
                            sx={{ color: 'white' }}
                        >
                            {page.name}
                        </Button>
                    ))}

                </div>
            </div>
        </header>
    )
}

export default Header
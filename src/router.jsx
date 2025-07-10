import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TipoPokemon from "./pages/TipoPokemon";
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"
import Buscar from "./pages/Buscar"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'tipo/grass',
                element: <TipoPokemon tipo="grass" titulo="Planta" />
            },
            {
                path: 'tipo/fire',
                element: <TipoPokemon tipo="fire" titulo="Fuego" />
            },
            {
                path: 'tipo/water',
                element: <TipoPokemon tipo="water" titulo="Agua" />
            },
            {
                path: 'buscar',
                element: <Buscar />
            },
            {
                path: 'nosotros',
                element: <Nosotros />
            },
            {
                path: 'contacto',
                element: <Contacto />
            }
        ]
    }
])

import { Box, Typography } from '@mui/material'
import './Contacto.css'
import { useEffect } from 'react';

function Contacto() {

    useEffect(() => {
        document.title = 'Contacto';
    }, []);

    return (
        <Box sx={{ p: 4 }}>

            <main className='main-contacto'>
                <h4 className='tituloPagina'>Contacto</h4>
                <section class="container-formulario">
                    <div class="info-form">
                        <h2>¡Tu opinión me importa!</h2>
                        <p>
                            ¡Gracias por visitar mi página sobre Pokemons! Espero que hayas disfrutado estas funcionalidades tanto como yo al crearlo. Si tenés alguna sugerencia, comentario o querés compartir tu
                            opinión sobre la Web o Pokemons, no dudes en dejar tu mensaje. ¡Que tu aventura Pokémon esté llena de descubrimientos, combates legendarios y grandes amistades!
                        </p>
                        <a href="#"><i class="bi bi-telephone"></i> 123-456-789</a>
                        <a href="#"><i class="bi bi-envelope"></i> mimail@tudominio.com</a>
                        <a href="#"><i class="bi bi-geo-alt"></i> Ciudad, Pais</a>
                    </div>
                    <form>
                        <input class="campo" type="text" name="Nombre" placeholder="Nombre" />
                        <input class="campo" type="text" name="Email" placeholder="Email" />
                        <input class="campo" name="Telefono" placeholder="Telefono" />

                        <textarea name="Comentario" placeholder="Comentario"></textarea>

                        <select class="campo" name="Conocimiento" aria-placeholder="Conocimiento">
                            <option value="" disabled selected>Conocimiento Sobre Pokemon</option>
                            <option value="Mucho">Mucho</option>
                            <option value="Normal">Normal</option>
                            <option value="Poco">Poco</option>
                            <option value="Nada">Nada</option>
                        </select>
                        <div class="novedades">
                            <label>¿Deseas recibir novedades y promociones por correo electrónico?</label>
                            <br />
                            <input type="radio" name="newsletter" /> Si <input type="radio" name="newsletter" /> No
                            <br />
                            <input type="submit" value="Enviar" />
                            <input type="reset" value="Resetear" />
                        </div>
                    </form>
                </section>
            </main>
        </Box>
    )
}

export default Contacto
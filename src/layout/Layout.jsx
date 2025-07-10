import { Box } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({ children }) {
    return (

        /* Box central*/
        <Box sx={{
            minHeight: '95vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 0,
            margin: 0,
            boxSizing: 'border-box'
        }}>

            {/* HEADER */}
            <Header />
            {/* BOX PARA CADA PAGE*/}
            <Box sx={{
                flex: '1', height: '100%', margin: '10px', padding: '0',
                display: 'flex',
                flexDirection: 'column',

            }}>
                {children}
            </Box>
            <Box sx={{ width: '100%', textAlign: 'center', margin: '20px 0 0 0' }}>
                <Footer />
            </Box>
        </Box >
    )
}

export default Layout
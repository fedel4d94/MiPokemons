function MostrarError({ error }) {

    return (
        <p style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'red',
            border: '4px solid rgb(238, 24, 24)',
            background: 'rgb(231, 135, 135, 0.3)',
            margin: '10px',
            padding: '30px'

        }}>{error.message}</p>

    )
}

export default MostrarError
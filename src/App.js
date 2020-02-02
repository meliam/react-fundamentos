import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta/TarjetaFruta'

const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={5000} />
        <TarjetaFruta name='Naranja' price={3500} />
        <TarjetaFruta name='Kiwi' price={36500} />
    </div>
)

export default App
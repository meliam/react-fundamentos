import React from 'react'
import './TarjetaFruta.css'

class TarjetaFruta extends React.Component {
    state ={
            cantidad: 0
    }
    
    agregar = () => {
        this.setState ({cantidad: this.state.cantidad + 1})
    }

    quitar = () => {
        this.setState ({cantidad: this.state.cantidad - 1})
    }
    
    limpiar = () => {
        this.setState ({cantidad: 0})
    }

    render () {
        var hasItems = this.state.cantidad > 0
        var classes = `TarjetaFruta ${ hasItems ? 'TarjetaFruta-activa' : '' }`
        return (<div className={classes}>
            <h3>{this.props.name}</h3>
            <hr />
            <div> Cantidad: {this.state.cantidad}</div>
            <button 
                onClick={this.agregar}
            >+</button>
            <button 
                onClick={this.quitar}
            >-</button>
            <button 
                onClick={this.limpiar}
            >Limpiar</button>
            <p>$ {this.props.price}</p>
            <p>
                Total: ${this.props.price * this.state.cantidad}
            </p>
    
        </div>)    
    }
}


export default TarjetaFruta
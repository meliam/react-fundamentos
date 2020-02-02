import React, { Component } from 'react'

class Contador extends Component {
    state = {
        clicks: 0
    }

    add = () => {
        this.setState((state, props) => ({
                clicks: state.clicks + 1 
            }
        ))
    }
    render (){
        return (
            <button onClick={this.add}>
                Click: ({this.state.clicks})
            </button>
        )
    }
}


const App2 = () => (
    <div>
        <Contador />
    </div>
)

export default App2
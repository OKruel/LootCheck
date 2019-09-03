import React, { Component } from 'react'
import Routes from '../routes/routes'

class App extends Component {
    render() {
        return (
            <div>
                <Routes />
                <hr></hr>
                <div>Powered by <a target='_blank' rel="noopener noreferrer" href='https://www.coindesk.com/price'>Coindesk</a></div>
            </div>
        )
    }
}

export default App
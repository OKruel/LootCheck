import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loot extends Component {


    computeBitcoin() {
        const { bitcoin } = this.props
        if (Object.keys(bitcoin).length === 0) return '';
        const balance = this.props.balance.balance
        const rate = parseFloat(this.props.bitcoin.rate)
        return balance / rate
    }
    render() {
        return (
            <div>
                <h3>Bitcoin Balance: {this.computeBitcoin()} </h3>
                <h3>Bitcoin Rate: {this.props.bitcoin.rate}</h3>
            </div>
        )
    }
}

export default connect(state => state, null)(Loot)